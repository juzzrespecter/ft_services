<?php

define( 'DB_NAME', 'db_name' );

define( 'DB_USER', 'db_user' );

define( 'DB_PASSWORD', 'db_password' );

define( 'DB_HOST', 'mysql-svc.default.svc.cluster.local' );

define( 'DB_CHARSET', 'utf8' );

define( 'DB_COLLATE', '' );

define('AUTH_KEY',         'p.Ha:p?vqaQti&1T UzSACIiq]I.|nIg%]cErPs2qA+E%$+l,(?nf|MBiaf?rh6|');
define('SECURE_AUTH_KEY',  'j%zTB.4+k~sG;(yJH~DNawJVgW]QJn2;/(W4u~<DV9l90Zp+)5_p1c;:bM<D=q}>');
define('LOGGED_IN_KEY',    'yE&DuXKqA}xC|kJwUi$A#$c9_et9a#;<IaCMQtT.!w+ mIYL4G/loRW`4> BD?4_');
define('NONCE_KEY',        'OP|B[X0%Ry^`QR{OxR_B~cn-`czOJ}wwY}z`7NTtW1V(A^)6>LeK9>N9|+7;wHb!');
define('AUTH_SALT',        '|i/ga`rUQP ,*9#<%C`iE,qdib-4}gpvri@<Kc+s^)f<5[*fxr~{h^>xHMjQCsK7');
define('SECURE_AUTH_SALT', 'b%78[gp<?ZW.*<T?Kd=F72IW{_J#Gif@b,YnoZ7-PK366~J-yV|;,A94-gt:]zf*');
define('LOGGED_IN_SALT',   '@.g%y~]@s/SZc3kFK y0OWE8P37&s=fQpgr5*C/-w!<&`m(h {cx()6M+Kk-Rc4#');
define('NONCE_SALT',       ')3Q-Ij%[(w2hFU+yD-nJXAa1ynN _UUJ`G2/~9!:Yn)@V!5u,_?hp:Q&WM1`:p6x');

$table_prefix = 'wp_';

define( 'WP_DEBUG', false );

if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

require_once ABSPATH . 'wp-settings.php';
