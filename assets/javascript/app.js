var timer = 90; 

var correct = 0; 

var incorrect = 0; 


function calculate(){
	// console.log($('input[name=guess]:checked').val());
	// console.log(correct);

	// Can't make this work I hate repeating code now.  
	// Iterate through each class
// for (var i = 0; i <= 10; i++){
	var theClass = "$('input[name="
	// var theClass1 = '"guess1"'
	// var theClass2 = "]:checked').val()";
	// var theClass3 = theClass + theClass1 + theClass2
	// console.log(theClass3);

	if($(".q1").val() === "true"){
		correct++;
		console.log(correct); 
		} else {
			incorrect++;
			console.log(incorrect);
		}	
	//score page
	$(".area").html("<div>" + "<h2>" + "Correct: " + correct + "</h2>" + "<br>" + "<br>" + "<h2>" + "Incorrect: " + incorrect + "</h2>" + "</div>");
};

//for some reason I could not get the function to call again here had to copy it again.  
$(".finish").click(function() {
	if($('input[name="guess1"]:checked').val() === "true"){
		correct++;
		console.log(correct); 
		} else {
			incorrect++;
			console.log(incorrect);
		}	
	//score page
	$(".area").html("<div>" + "<h2>" + "Correct: " + correct + "</h2>" + "<br>" + "<br>" + "<h2>" + "Incorrect: " + incorrect + "</h2>" + "</div>");

});

//timer functions
function run() {
  intervalId = setInterval(decrement, 1000);
}

function stop() {
  clearInterval(intervalId);
}

function decrement() {
  timer--;
  $(".timer").html(timer + " seconds");

  if (timer === 0) {
  	stop();
	alert("Time Up!"); 
    calculate();
    
  }
}

run();

