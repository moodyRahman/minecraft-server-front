status_e = document.getElementById("status");
timer_e = document.getElementById("timer");
ignite_e = document.getElementById("ignite")

var draw = function(data){
	console.log(data);

	ignite_e.disabled = false;

	if (data.server_state){
		status_e.innerHTML = "minecult is online!";
		timer_e.setAttribute("style", "visibility:visible;");
		timer_e.innerHTML = "time left: " + data.time_left;
	}
	else {
		status_e.innerHTML = "minecult is offline";
		timer_e.setAttribute("style", "visibility:hidden;");
		timer_e.innerHTML = data.time_left;
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