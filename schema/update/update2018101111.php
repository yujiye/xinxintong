<?php
require_once '../../db.php';

$sqls = [];
//
$sqls[] = "ALTER  TABLE  `xxt_enroll_record_round`  ADD  INDEX index_enroll_key (  `enroll_key`  )";
$sqls[] = "ALTER  TABLE  `xxt_enroll_record_remark`  ADD  INDEX index_enroll_key (  `enroll_key`  )";
$sqls[] = "ALTER  TABLE  `xxt_enroll_record_data`  ADD  INDEX index_enroll_key (  `enroll_key`  )";
//
foreach ($sqls as $sql) {
	if (!$mysqli->query($sql)) {
		header('HTTP/1.0 500 Internal Server Error');
		echo 'database error: ' . $mysqli->error;
	}
}

echo "end update " . __FILE__ . PHP_EOL;