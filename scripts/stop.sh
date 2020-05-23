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

if [ "$status" == "0" ]
then
    cd $minecraft_dir
else
    echo "server already running!"
fi