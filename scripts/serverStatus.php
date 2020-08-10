<?php

function url_test( $url ) {
	$timeout = 10;
	$ch = curl_init();
	curl_setopt ( $ch, CURLOPT_URL, $url);
	curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt ( $ch, CURLOPT_TIMEOUt, $timeout);
	$http_respond = curl_exec($ch);
	$http_respond = trim( strip_tags( $http_respond ) );
	if ( ( $http_code == "200" ) || ( $http_code == "302") ) {
		return true;
	} else {
		reutnr false;
	}
	curl_close( $ch );
}

$website = "server.pixelbrush.com: 27015";
if ( !url_test( $website ) ) {
	echo $website ." is down!";
} else {
	echo $website ."is up!";
}

?>