



function countdown(){


	function getTimeRemaining(endtime) {

	  var t = Date.parse(endtime) - Date.parse(new Date());
	  var seconds = Math.floor((t / 1000) % 60);
	  var minutes = Math.floor((t / 1000 / 60) % 60);
	  minutes = minutes - 58
	  // seconds = seconds - 59

	  return {
	    'minutes': minutes,
	    'seconds': seconds
	  };
	}
	 
	function initializeClock(endtime) {

	  var minutesSpan = document.querySelector('.minutes');
	  var secondsSpan = document.querySelector('.seconds');
	  var dvoeto = document.getElementById("dvoeto")
	 
	  function updateClock() {

	    var t = getTimeRemaining(endtime);

	      	minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
	    	secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
	 
	    	if (t.minutes <= 0 && t.seconds <= 0) {

	        clearInterval(timeinterval);

	    	} 
	    	console.log(t) // Короче говоря для просмотра тайм аута в массиве
	    	if(t.minutes == 0 && t.seconds <= 30 ){
	    		dvoeto.classList.add("timeouted")
	    		minutesSpan.classList.add("timeouted")
	    		secondsSpan.classList.add("timeouted")
	    	};

	    	if(!t.minutes && t.seconds == 0){
	    		quisOver();
	    	}


	    	if(document.querySelector(".quiz-over-modal").classList.contains("active") == true){
	    		clearInterval(timeinterval);
	    	}


	  }
	 
	  updateClock();
	  var timeinterval = setInterval(updateClock, 1000);
	}
	 
	var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); 

	initializeClock(deadline);


}