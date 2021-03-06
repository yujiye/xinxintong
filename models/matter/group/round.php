<?php
namespace matter\group;

class round_model extends \TMS_MODEL {
	/**
	 *
	 */
	public function &byId($id, $aOptions = []) {
		$fields = isset($aOptions['fields']) ? $aOptions['fields'] : '*';
		$q = [
			$fields,
			'xxt_group_round',
			["round_id" => $id],
		];
		$round = $this->query_obj_ss($q);

		return $round;
	}
	/**
	 * 创建轮次
	 */
	public function &create($app, $prototype = array()) {
		$targets = isset($prototype['targets']) ? $this->toJson($prototype['targets']) : '[]';
		$round = array(
			'aid' => $app,
			'round_id' => uniqid(),
			'create_at' => time(),
			'title' => isset($prototype['title']) ? $prototype['title'] : '新分组',
			'times' => isset($prototype['times']) ? $prototype['times'] : 0,
			'targets' => $targets,
		);
		$this->insert('xxt_group_round', $round, false);

		$round = (object) $round;

		return $round;
	}
	/**
	 * 获得抽奖的轮次
	 *
	 * @param string $app
	 * @param array $aOptions
	 */
	public function &byApp($appId, $aOptions = []) {
		$fields = isset($aOptions['fields']) ? $aOptions['fields'] : '*';
		$roundType = isset($aOptions['round_type']) ? $aOptions['round_type'] : 'T';
		$cascade = isset($aOptions['cascade']) ? $aOptions['cascade'] : '';
		$cascade = explode(',', $cascade);

		$q = [
			$fields,
			'xxt_group_round',
			['aid' => $appId],
		];
		if (!empty($roundType)) {
			$q[2]['round_type'] = $roundType;
		}
		$rounds = $this->query_objs_ss($q);
		/* 获得指定的级联数据 */
		if (count($rounds) && count($cascade)) {
			$modelUsr = $this->model('matter\group\player');
			foreach ($rounds as $oRound) {
				if (in_array('playerCount', $cascade)) {
					$oRound->playerCount = $modelUsr->countByRound($appId, $oRound->round_id);
				}
			}
		}

		return $rounds;
	}
	/**
	 * 清除轮次结果
	 *
	 * @param string $appId
	 */
	public function clean($appId) {
		$rst = $this->update(
			'xxt_group_player',
			[
				'round_id' => 0,
				'round_title' => '',
			],
			['aid' => $appId]
		);

		return $rst;
	}
}