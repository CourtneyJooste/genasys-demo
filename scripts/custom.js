
$(document).ready(function(){

	//========START SCROLLING SECTION============

	var initialScroll = false;
	var objectString = $('.count1')[0];

	
	if (isScrolledIntoView(objectString)  ){
		counter1animate();
		initialScroll = true;
	}

	var initialScroll2 = false;
	var objectString2 = $('.count2')[0];

	
	if (isScrolledIntoView(objectString2)  ){
		counter2animate();
		initialScroll2 = true;
	}

	var initialScroll3 = false;
	var objectString3 = $('.count3')[0];

	if (isScrolledIntoView(objectString3)  ){
		counter3animate();
		initialScroll3 = true;
	}

	var initialScroll4 = false;
	var objectString4 = $('.chart1-padding')[0];

	if (isScrolledIntoView(objectString4)  ){
		showChart1();
		initialScroll4 = true;
	}

	var initialScroll5 = false;
	var objectString5 = $('.chart2-padding')[0];

	if (isScrolledIntoView(objectString5)  ){
		showChart2();
		initialScroll5 = true;
	}

	function counter1animate(){
		$('.count1').prop('Counter',0).animate({
	        Counter: 90
	    }, {
	        duration: 3000,
	        easing: 'swing',
	        step: function (now) {
	            $('.count1').text(Math.ceil(now));
	        }
	    });
	}

	function counter2animate(){
		$('.count2').prop('Counter',0).animate({
	        Counter: 14
	    }, {
	        duration: 1800,
	        easing: 'swing',
	        step: function (now) {
	            $('.count2').text(Math.ceil(now));
	        }
	    });
	}

	function counter3animate(){
		$('.count3').prop('Counter',0).animate({
	        Counter: 11
	    }, {
	        duration: 1000,
	        easing: 'swing',
	        step: function (now) {
	            $('.count3').text(Math.ceil(now));
	        }
	    });
	}


	// var imageElementString = $('.img-brand-block');
	function isScrolledIntoView(el) {
	    var elemTop = el.getBoundingClientRect().top;
	    var elemBottom = el.getBoundingClientRect().bottom;

	    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
	    return isVisible;
	};

	$(window).scroll(function(){
		//Check for elements scrolling into view

		// var secondOne = document.getElementsByClassName("img-brand-block");
		if (initialScroll === false  && isScrolledIntoView(objectString)  ){
			counter1animate();
			initialScroll = true;
		}

		if (initialScroll2 === false  && isScrolledIntoView(objectString2)  ){
			counter2animate();
			initialScroll2 = true;
		}

		if (initialScroll3 === false  && isScrolledIntoView(objectString3)  ){
			counter3animate();
			initialScroll3 = true;
		}

		if (initialScroll4 === false  && isScrolledIntoView(objectString4)  ){
			showChart1();
			initialScroll4 = true;
		}

		if (initialScroll5 === false  && isScrolledIntoView(objectString5)  ){
			showChart2();
			initialScroll5 = true;
		}

	})


	//===========END SCROLLING SECTION============


	//=============START TIMERS===================
	var currentFrame = 3;
	var skipFrame = false;

	function shuffleCitites() {
		
		if (currentFrame === 3){			// FRAME 1 london / cpt / jhb 
			currentFrame = 1;
			$('.city-box1').text("Cope Lown");
			$('.city-box2').text("Japehanesbown");			
			$('.city-box3').text("Lojanesburg");
			setTimeout(function() {
				$('.city-box1').text("Candown");
				$('.city-box2').text("Cope Hanestown");			
				$('.city-box3').text("Jondownesburg");
			}, 80);

			setTimeout(function() {
				$('.city-box1').text("Coplon");
				$('.city-box2').text("Cop Tanes");			
				$('.city-box3').text("Jobergondon");
			}, 160);

			setTimeout(function() {
				$('.city-box1').text("London");
				$('.city-box2').text("Cape Town");
				$('.city-box3').text("Johannesburg");
			}, 240);

		} else if (currentFrame === 1) { 	// FRAME 2 jhb / london / cpt
			currentFrame = 2;

			$('.city-box1').text("Jobedone");
			$('.city-box2').text("Cope Lown");		
			$('.city-box3').text("Lapejannestown");
			setTimeout(function() {
				$('.city-box1').text("Londwonersdon");
				$('.city-box2').text("Lontowncap");			
				$('.city-box3').text("Capedownieburg");
			}, 80);

			setTimeout(function() {
				$('.city-box1').text("Jodondon");
				$('.city-box2').text("Capedown");		
				$('.city-box3').text("Jobtown");
			}, 160);

			setTimeout(function() {
				$('.city-box1').text("Johannesburg");
				$('.city-box2').text("London");
				$('.city-box3').text("Cape Town");
			}, 240);

			// jhb -> cpt | london -> jhb | cpt -> london
		} else if (currentFrame === 2){ 	// FRAME 3 cpt / jhb / london
			currentFrame = 3;

			$('.city-box1').text("Jobtown");
			$('.city-box2').text("Jobergondon");			
			$('.city-box3').text("Crapedon");
			setTimeout(function() {
				$('.city-box1').text("Capedownieburg");
				$('.city-box2').text("Lontowncap");			
				$('.city-box3').text("Calmdown");
			}, 80);

			setTimeout(function() {
				$('.city-box1').text("Japehanesbown");
				$('.city-box2').text("Jondownesburg");			
				$('.city-box3').text("Lape Ton");
			}, 160);

			setTimeout(function() {
				$('.city-box1').text("Cape Town");
				$('.city-box2').text("Johannesburg");
				$('.city-box3').text("London");
			}, 240);

		}
	}

	(function(){
	    // do some stuff

	    if(skipFrame === false){
	    	shuffleCitites();
	    } else {
	    	skipFrame = false;
	    }

	    setTimeout(arguments.callee, 4000);
	})();

	$( ".cities-box" ).click(function() {
    	shuffleCitites();
    	skipFrame = true;
	});




	//=============END TIMERS====================


	//==============START CHARTS=================

	function showChart1(){

		var ctx = document.getElementById("chart1");
		var data = {
	    labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
	    datasets: [
		        {
		            label: "Amount of employees",
		            fill: true,
		            lineTension:0.3,
		            backgroundColor: "rgba(54, 162, 235, 0.5)",
		            borderColor: "rgba(54, 162, 235, 1)",
		            borderCapStyle: 'butt',
		            borderDash: [],
		            borderDashOffset: 0.0,
		            borderJoinStyle: 'miter',
		            defaultFontColor:'#fff',
		            // pointBorderColor: "rgba(54, 162, 235, 1)",
		            pointBorderColor: "rgba(255, 255, 255, 1)",
		            // pointBackgroundColor: "rgba(255, 255, 255, 1)",
		            pointBackgroundColor: "rgba(231, 35, 37, 1)",
		            pointBorderWidth: 2,
		            pointHoverRadius: 5,
		            pointHoverBackgroundColor: "rgba(75,192,192,1)",
		            pointHoverBorderColor: "rgba(220,220,220,1)",
		            pointHoverBorderWidth: 2,
		            pointRadius: 4,
		            pointHitRadius: 10,
		            data: [32, 41, 54, 64, 74, 73, 77],
		            spanGaps: false,
		        }
		    ]
		};
		setTimeout(function() {
			var chartInstance = new Chart(ctx, {
			    type: 'line',
			    data: data,
			    options: {
			        title: {
			            display: false
			        },
			        legend: {
		            	display: true,
			            labels: {
			                fontColor: 'rgb(255, 255, 255)'
			            }
			        },
				    scales:{
					  xAxes:[{
					    gridLines:{
					      color:"rgba(255,255,255,0.35)",
					      zeroLineColor:"rgba(255,255,255,0.35)"
					    },
					    ticks: {
		                  fontColor: "#fff", // font color
		                }
					  }],

					  yAxes:[{
					    gridLines:{
					      color:"rgba(255,255,255,0.35)",
					      zeroLineColor:"rgba(255,255,255,0.35)"
					    },
					    ticks: {
		                  fontColor: "#fff", // font color
		                }
					  }]
					}
			    }
			})
			
		}, 200)


	}
		
	function showChart2(){


		var ctx2 = document.getElementById("chart2");
		var data2 = {
	    labels: ["Start", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
	    datasets: [
		        {
		            label: "GWP Billion Rand",
		            fill: false,
		            lineTension:0.1,
		            backgroundColor: "rgba(54, 162, 235, 0)",
		            borderColor: "rgba(231, 35, 37, 1)",
		            borderCapStyle: 'butt',
		            borderDash: [],
		            borderDashOffset: 0.0,
		            borderJoinStyle: 'miter',
		            defaultFontColor:'#fff',
		            // pointBorderColor: "rgba(54, 162, 235, 1)",
		            pointBorderColor: "rgba(255, 255, 255, 1)",
		            // pointBackgroundColor: "rgba(255, 255, 255, 1)",
		            pointBackgroundColor: "rgba(231, 35, 37, 1)",
		            pointBorderWidth: 2,
		            pointHoverRadius: 5,
		            pointHoverBackgroundColor: "rgba(255, 255, 255, 1)",
		            pointHoverBorderColor: "rgba(231, 35, 37, 1)",
		            pointHoverBorderWidth: 2,
		            pointRadius: 4,
		            pointHitRadius: 10,
		            data: [0, 3, 5, 8, 10, 8, 9, 11],
		            spanGaps: false,
		        }
		    ]
		};

		setTimeout(function() {
			var chartInstance2 = new Chart(ctx2, {
			    type: 'line',
			    data: data2,
			    options: {
			        title: {
			            display: false
			        },
			        legend: {
		            	display: true,
			            labels: {
			                fontColor: 'rgb(255, 255, 255)'
			            }
			        },
				    scales:{
					  xAxes:[{
					    gridLines:{
					      color:"rgba(255,255,255,0.35)",
					      zeroLineColor:"rgba(255,255,255,0.35)"
					    },
					    ticks: {
		                  fontColor: "#fff", // font color
		                }
					  }],

					  yAxes:[{
					    gridLines:{
					      color:"rgba(255,255,255,0.35)",
					      zeroLineColor:"rgba(255,255,255,0.35)"
					    },
					    ticks: {
		                  fontColor: "#fff", // font color
		                }
					  }]
					}
			    }
			})
		}, 200);
	}		

	// function showChart2(){
		

	// }


	//==============END CHARTS==================
	
});