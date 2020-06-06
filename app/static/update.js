status_e = document.getElementById("status");
timer_e = document.getElementById("timer");
ignite_e = document.getElementById("ignite")

var draw = function (data) {
	console.log(data);


	if (data.server_state) {
		ignite_e.disabled = true;
		status_e.innerHTML = "minecult is online!";
		timer_e.setAttribute("style", "visibility:visible;");
		timer_e.innerHTML = "time left: " + data.time_left;
		document.body.style.background = "#98fb98";
	}
	else {
		ignite_e.disabled = false;
		status_e.innerHTML = "minecult is offline";
		timer_e.setAttribute("style", "visibility:hidden;");
		timer_e.innerHTML = data.time_left;
		document.body.style.background = "#fa867e";
	}
	// status_e.innerHTML = data.server_state;
}

var update = function () {
	$.get("cult/status", draw);
}


update();

setInterval(function () {
	update();
}, 10 * 60 * 1000);


var ignite = function () {
	$.get("/cult/status", function (d) {
		$.get("cult/toggle");
		draw(
			{
				server_state: true,
				time_left: 60
			}
		);
	});
}