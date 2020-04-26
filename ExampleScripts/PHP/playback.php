<?php

	/*
		Arguments passed:  <action:start/stop> %username% %device.name% %item.id% %item.name%
	*/

	$log_file = "d:\\embyscripts\\playback_php.log";

	$status = $argv[1];
	$username = $argv[2];
	$devicename = $argv[3];
	$item_id = $argv[4];
	$item_name = $argv[5];

	file_put_contents($log_file, "Playback: $status : User $username on device $devicename - media: ($item_id) $item_name", FILE_APPEND);
	