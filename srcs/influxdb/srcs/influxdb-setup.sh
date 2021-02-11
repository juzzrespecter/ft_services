#!/bin/sh

DIR="/var/lib/influxdb/"

# install db if not present

if [ ! "$(ls -A $DIR)" ]; then
	/dbconf.sh &
fi

update-ca-certificates

# init telegraf & db

telegraf --config /etc/telegraf/telegraf.conf &
influxd -config=/etc/influxdb.conf
