
		var countdown;
		function startTimer() {
			var hours = document.getElementById("hours").value;
			var minutes = document.getElementById("minutes").value;
			var seconds = document.getElementById("seconds").value;
			var totalSeconds = (hours * 3600) + (minutes * 60) + parseInt(seconds);
			countdown = setInterval(function() {
				totalSeconds--;
				var hoursDisplay = Math.floor(totalSeconds / 3600);
				var minutesDisplay = Math.floor((totalSeconds % 3600) / 60);
				var secondsDisplay = totalSeconds % 60;
				document.getElementById("hours").value = hoursDisplay;
				document.getElementById("minutes").value = minutesDisplay;
				document.getElementById("seconds").value = secondsDisplay;
				if (totalSeconds <= 0) {
					clearInterval(countdown);
					alert("Time's up!");
				}
			}, 1000);
		}
	