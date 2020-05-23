from subprocess import Popen
from flask import *
import psutil

app = Flask(__name__)



@app.route("/cult")
def index():
	server_state = "java" in (p.name() for p in psutil.process_iter())
	return render_template("index.html", server_status=server_state)


