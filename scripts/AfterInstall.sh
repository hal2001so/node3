#!/bin/bash
service nginx start
pid=$(ps -ef | grep node | grep staticserver.js | grep nohup | awk '{print $2}')
if [ -z "$pid" ]
then
  screen -dmS nohup node /usr/share/nginx/html/staticserver.js &
fi
