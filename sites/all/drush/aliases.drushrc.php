<?php
$aliases['dev'] = array(
	'uri'=> 'redale.ccistaging.com',
	'root' => '/home/staging/subdomains/redale/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'staging',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),
	'ssh-options'=>'-p 37241'
);

/*$aliases['live'] = array(
	'uri'=> 'heybabies.ca',
	'root' => '/home/heybabies/subdomains/live/public_html',
	'remote-host'=> 'host.cciserver2.com',
	'remote-user'=> 'heybabies',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	)
);

