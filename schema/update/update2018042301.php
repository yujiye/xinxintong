<?php
require_once '../../db.php';
//
$sqls[] = "ALTER TABLE xxt_enroll add repos_config text null after rp_config";
//
foreach ($sqls as $sql) {
	if (!$mysqli->query($sql)) {
		header('HTTP/1.0 500 Internal Server Error');
		echo 'database error: ' . $mysqli->error;
	}
}

echo "end update " . __FILE__ . PHP_EOL;