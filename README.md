# minecraft-server-front
Control your minecraft server from a webpage

This webapp allows users to activate a minecraft server from a web page.  
The server will automatically shutdown after an hour. Users in-game will have messages sent to them with how much time is left every 15 minutes. The timer on the website also updates every 15 minutes. 

### System Dependencies
- lsof
- python3
- python3-pip

### Python Dependencies (requirements.txt)
- autopep8==1.5.2
- click==7.1.2
- Flask==1.1.2
- itsdangerous==1.1.0
- Jinja2==2.11.2
- MarkupSafe==1.1.1
- psutil==5.7.0
- pycodestyle==2.6.0
- Werkzeug==1.0.1

## Pre-requesites
- An active screen session titled `minecraft`, with its directory set to the minecraft server directory
  - `screen -d -m -S minecraft`
  - `screen -S minecraft -p 0 -X stuff "java -jar $jarname nogui\n"`