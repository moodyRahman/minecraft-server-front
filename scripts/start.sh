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
    echo "TRUE"
    cd $minecraft_dir
    ls
    java -jar paper-307.jar nogui
else
    echo "server already running!"
fi



# java -jar paper-307.jar nogui