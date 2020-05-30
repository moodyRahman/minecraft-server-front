status_e = document.getElementById("status");
timer_e = document.getElementById("timer");
ignite_e = document.getElementById("ignite")

var draw = function(data){
	console.log(data);


	if (data.server_state){
		ignite_e.disabled = true;
		status_e.innerHTML = "minecult is online!";
		timer_e.setAttribute("style", "visibility:visible;");
		timer_e.innerHTML = "time left: " + data.time_left;
	}
	else {
		ignite_e.disabled = false;
		status_e.innerHTML = "minecult is offline";
		timer_e.setAttribute("style", "visibility:hidden;");
		timer_e.innerHTML = data.time_left;
		ignite_e.innerHTML = "activate server"
	}
	// status_e.innerHTML = data.server_state;
}

var update = function(){
	$.get("cult/status", draw);
}


update();

setInterval(function(){
	update();
}, .5 * 60 * 1000);


var ignite = function(){
	$.get("/cult/status", function(d){
		if (!d.server_state){
			$.get("cult/toggle");
			ignite_e.disabled = true;
		}
		else {
			ignite_e.innerHTML = "Server already running"
		}
	});
}