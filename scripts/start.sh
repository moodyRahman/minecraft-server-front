#!/usr/bin/env bash

minecraft_dir="/home/moody/Desktop/server"

echo $minecraft_dir

cd $minecraft_dir
ls

# lsof -i:25565

lsof -i:25565

status=$?

echo "THE RETURN CODE OF LSOF: $status"

# code 0 = running server
# cpde 1 = stopped server

if [ "$status" == "1" ]
then
    screen -S minecraft -p 0 -X stuff "java -jar paper-307.jar nogui\n"
    sleep 120m
    screen -S minecraft -p 0 -X stuff "stop\n"
else
    echo "server already running!"
fi

# screen -S minecraft -p 0 -X stuff "stop\n"

# java -jar paper-307.jar nogui