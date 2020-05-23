#!/usr/bin/env bash

minecraft_dir="/home/moody/Desktop/server"

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
    echo "60" > stat.txt
    sleep 15m
    
    screen -S minecraft -p 0 -X stuff "say 45 MINUTES LEFT IN THIS SESSION\n"
    echo "45" > stat.txt
    sleep 15m
    
    screen -S minecraft -p 0 -X stuff "say 30 MINUTES LEFT IN THIS SESSION\n"
    echo "30" > stat.txt
    sleep 15m
    
    screen -S minecraft -p 0 -X stuff "say 15 MINUTES LEFT IN THIS SESSION\n"
    echo "15" > stat.txt
    sleep 14m
    
    screen -S minecraft -p 0 -X stuff "say 1 MINUTE LEFT IN THIS SESSION\n"
    echo "1" > stat.txt
    sleep 1m
    
    screen -S minecraft -p 0 -X stuff "stop\n"
    echo "" > stat.txt
else
    echo "server already running!"
fi

# screen -S minecraft -p 0 -X stuff "stop\n"

# java -jar paper-307.jar nogui