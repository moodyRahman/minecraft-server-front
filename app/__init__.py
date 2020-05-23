from subprocess import Popen
from flask import *
import psutil

app = Flask(__name__)



@app.route("/cult")
def index():
	server_state = "java" in (p.name() for p in psutil.process_iter())
	# time_left = open("stat.txt", "r").read()

	with open("stat.txt", "r") as f:
		time_left = f.read()
		pass

	return render_template("index.html", server_status=server_state, time=time_left)


@app.route("/cult/toggle")
def turnonsever():
	# a_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)


	# location = ("127.0.0.1", 80)

	# result_of_check = a_socket.connect_ex(location)


	# if result_of_check == 0:
	# 	print("Port is open")
	# 	p = Popen(["./scripts/start.sh", ""])
	# 	p.wait()
	# else:
	# 	print("Port is not open")

	p = Popen(["./scripts/start.sh", ""])
	
	return render_template("starting.html")



if __name__ == "__main__":
	app.run()



# p = Popen(["./scripts/start.sh", ""])
# p.wait()
