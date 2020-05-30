from subprocess import Popen
from flask import *
import psutil

app = Flask(__name__)



@app.route("/cult")
def index():
	return render_template("index.html")


@app.route("/cult/status")
def status():
	server_state = "java" in (p.name() for p in psutil.process_iter())
	with open("stat.txt", "r") as f:
		time_left = f.read()
		pass

	return {"server_state": server_state, "time_left":time_left}

@app.route("/cult/update.js")
def js():
	return app.send_static_file('update.js')

@app.route("/cult/toggle")
def turnonsever():
	p = Popen(["./scripts/start.sh", ""])

	print(p.pid)
	
	return render_template("starting.html")



if __name__ == "__main__":
	app.run()



# p = Popen(["./scripts/start.sh", ""])
# p.wait()
