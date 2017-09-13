<?php
namespace site\fe\matter\mission;

include_once dirname(dirname(__FILE__)) . '/base.php';
/**
 * 项目
 */
class main extends \site\fe\matter\base {
	/**
	 *
	 */
	public function index_action() {
		\TPL::output('/site/fe/matter/mission/main');
		exit;
	}
	/**
	 * 获得指定的任务
	 *
	 * @param int $id
	 */
	public function get_action($mission) {
		/* 检查权限??? */
		$oMission = $this->model('matter\mission')->byId($mission, ['fields' => 'id,title,summary,pic']);

		return new \ResponseData($oMission);
	}
	/**
	 * 获得用户在项目中的行为记录
	 */
	public function userTrack_action($mission) {
		$oUser = $this->who;
		$modelMis = $this->model('matter\mission\matter');

		$mattersByUser = [];
		$mattersByMis = $modelMis->byMission($mission, null, ['is_public' => 'Y']);
		if (count($mattersByMis)) {
			foreach ($mattersByMis as $oMatter) {
				if (!in_array($oMatter->type, ['enroll', 'signin', 'article'])) {
					continue;
				}
				if ($oMatter->type === 'enroll') {
					/* 用户身份是否匹配活动进入规则 */
					if (isset($oMatter->entry_rule->scope) && $oMatter->entry_rule->scope === 'group') {
						$bMatched = false;
						$oEntryRule = $oMatter->entry_rule;
						if (isset($oEntryRule->group->id)) {
							$oGroupApp = $oEntryRule->group;
							$oGroupUsr = $this->model('matter\group\player')->byUser($oGroupApp, $oUser->uid, ['fields' => 'round_id,round_title']);
							if (count($oGroupUsr)) {
								$oGroupUsr = $oGroupUsr[0];
								if (isset($oGroupApp->round->id)) {
									if ($oGroupUsr->round_id === $oGroupApp->round->id) {
										$bMatched = true;
									}
								} else {
									$bMatched = true;
								}
							}
						}
						if (false === $bMatched) {
							continue;
						}
					}

					if (!isset($modelEnlUsr)) {
						$modelEnlUsr = $this->model('matter\enroll\user');
					}
					$oUserData = $modelEnlUsr->byId($oMatter, $this->who->uid);

					/* 清除不必要的数据 */
					unset($oUserData->siteid);
					unset($oUserData->aid);
					unset($oUserData->userid);
					unset($oUserData->id);

					$oMatter->user = $oUserData;
				} else if ($oMatter->type === 'signin') {
					if (!isset($modelSigRec)) {
						$modelSigRec = $this->model('matter\signin\record');
					}
					$oApp = new \stdClass;
					$oApp->id = $oMatter->id;
					$oMatter->record = $modelSigRec->byUser($this->who, $oApp);
				}

				/* 清理不必要的数据 */
				unset($oMatter->siteid);
				unset($oMatter->data_schemas);
				unset($oMatter->pages);
				unset($oMatter->create_at);
				unset($oMatter->creater_name);
				unset($oMatter->dataTags);
				unset($oMatter->opUrl);
				unset($oMatter->op_short_url_code);
				unset($oMatter->rpUrl);
				unset($oMatter->rp_short_url_code);
				unset($oMatter->is_public);

				$mattersByUser[] = $oMatter;
			}
		}

		return new \ResponseData($mattersByUser);
	}
	/**
	 * 获得用户在项目中的行为记录
	 */
	public function recordList_action($mission) {
		$modelMis = $this->model('matter\mission\matter');
		$matters = $modelMis->byMission($mission, null, ['is_public' => 'Y']);
		if (count($matters)) {
			foreach ($matters as &$matter) {
				if ($matter->type === 'enroll') {
					if (!isset($modelEnlRec)) {
						$modelEnlRec = $this->model('matter\enroll\record');
					}
					$matter->records = [];
					$records = $modelEnlRec->byUser($matter, $this->who);
					foreach ($records as $record) {
						$matter->records[] = $record;
					}
				} else if ($matter->type === 'signin') {
					if (!isset($modelSigRec)) {
						$modelSigRec = $this->model('matter\signin\record');
					}
					$oApp = new \stdClass;
					$oApp->id = $matter->siteid;
					$matter->record = $modelSigRec->byUser($this->who, $oApp);
				} else if ($matter->type === 'group') {
					if (!isset($modelGrpRec)) {
						$modelGrpRec = $this->model('matter\group\player');
					}
					$matter->records = [];
					$records = $modelGrpRec->byUser($matter, $this->who->uid);
					foreach ($records as $record) {
						!empty($record->data) && $record->data = json_decode($record->data);
						$matter->records[] = $record;
					}
				}
			}
		}

		return new \ResponseData($matters);
	}

	/**
	 * 获得用户在项目中的行为记录
	 */
	public function recordList2_action($mission) {
		$result = new \stdClass;

		$appIds = [];
		$modelEnlRec = $this->model('matter\enroll\record');
		$records = $modelEnlRec->byMission($mission, ['userid' => $this->who->uid]);
		if (count($records)) {
			$result->enroll = new \stdClass;
			$result->enroll->records = $records;
			foreach ($records as $record) {
				$appIds[$record->aid] = true;
			}
			$appIds = array_keys($appIds);
			$modelApp = $this->model('matter\enroll');
			$result->enroll->apps = [];
			foreach ($appIds as $appId) {
				$app = $modelApp->byId($appId, ['fields' => 'id,siteid,title,summary,pic,data_schemas', 'cascaded' => 'N']);
				$app->data_schemas = json_decode($app->data_schemas);
				$result->enroll->apps[] = $app;
			}
		}

		$appIds = [];
		$modelSigRec = $this->model('matter\signin\record');
		$records = $modelSigRec->byMission($mission, ['userid' => $this->who->uid]);
		if (count($records)) {
			$result->signin = new \stdClass;
			$result->signin->records = $records;
			foreach ($records as $record) {
				$appIds[$record->aid] = true;
			}
			$appIds = array_keys($appIds);
			$modelApp = $this->model('matter\signin');
			$modelSigRnd = $this->model('matter\signin\round');
			$result->signin->apps = [];
			foreach ($appIds as $appId) {
				$app = $modelApp->byId($appId, ['fields' => 'id,siteid,title,summary,pic,data_schemas', 'cascaded' => 'N']);
				$app->data_schemas = json_decode($app->data_schemas);
				$app->rounds = $modelSigRnd->byApp($appId);
				$result->signin->apps[] = $app;
			}
		}

		$appIds = [];
		$modelGrpRec = $this->model('matter\group\player');
		$records = $modelGrpRec->byMission($mission, ['userid' => $this->who->uid]);
		if (count($records)) {
			$result->group = new \stdClass;
			$result->group->records = $records;
			foreach ($records as $record) {
				$appIds[$record->aid] = true;
			}
			$appIds = array_keys($appIds);
			$modelApp = $this->model('matter\group');
			$result->group->apps = [];
			foreach ($appIds as $appId) {
				$app = $modelApp->byId($appId, ['fields' => 'id,title,summary', 'cascaded' => 'N']);
				$result->group->apps[] = $app;
			}
		}

		return new \ResponseData($result);
	}
}