
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    [ "What was the Beatles' first single in 1962?", "Please Please Me", "Love Me Do", "	I Saw Her Standing There", "B" ],
	[ "Which was the last album recorded by the Beatles", "Sgt Pepper's Lonely Hearts Club Band", "Let it Be", "Abbey Road", "C" ],
	[ "	Which Beatles song did Frank Sinatra describe as the greatest love song ever written?", "Something", "Norwegian Wood", "Yesterday", "A" ],
	[ "	In which year was the Beatles' last live performance (at Candlestick Park, San Francisco)?", "1970", "1968", "1966", "C" ]
];
function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		_("test_status").innerHTML = "Test Completed";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]){
		correct++;
	}
	pos++;
	renderQuestion();
}

function endEarly() {
	test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		_("test_status").innerHTML = "Test Completed";
		pos = 0;
		correct = 0;
		return false;
}

window.addEventListener("load", renderQuestion, false);









var total_seconds = 60*5;
var c_minutes = parseInt(total_seconds/60);
var c_seconds = parseInt(total_seconds%60);

function CheckTime(){
document.getElementById("quiz-time-left").innerHTML
= 'Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds ' ;

if(total_seconds <=0){
setTimeout('endEarly()',1);
} else {
total_seconds = total_seconds -1;
c_minutes = parseInt(total_seconds/60);
c_seconds = parseInt(total_seconds%60);
setTimeout("CheckTime()",1000);//change to 1000
}}
setTimeout("CheckTime()",1000);