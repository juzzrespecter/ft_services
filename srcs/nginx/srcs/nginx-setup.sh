#!/bin/bash
rc-service php7-fpm start
nginx -g 'daemon off;'
