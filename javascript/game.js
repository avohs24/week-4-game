var wins = 0;
var losses = 0;
var yourNum = 0;
var winNum;
var blue;
var green;
var yellow;
var purple;
var audio = new Audio("../assets/sounds/gem_collection.wav");


		function reset (){
			winNum = (Math.floor(Math.random() * 120) +12);
			$("#winningNum").html("<h2>Winning Number is<h2>" + winNum);

			blue = (Math.floor(Math.random() * 11) + 1);
			green = (Math.floor(Math.random() * 11) + 1);
			yellow = (Math.floor(Math.random() * 11) + 1);
			purple = (Math.floor(Math.random() * 11) + 1);
			yourNum = 0;
			$("#yourNumber").html("<h2>Your Number is<h2>" + yourNum);
		}
			reset();



		function blueNum(){

			yourNum += blue;
			$("#yourNumber").html("<h2>Your Number is<h2> " + yourNum);
			winLoss();
			audio.play();
		}
			$("#blueButton").click(blueNum);


		function greenNum(){

			yourNum += green;
			$("#yourNumber").html("<h2>Your Number is<h2> " + yourNum);
			winLoss();
			audio.play();
		 }
		$("#greenButton").click(greenNum);



		function yellowNum(){

			yourNum += yellow;
			$("#yourNumber").html("<h2>Your Number is<h2> " + yourNum);
			winLoss();
			audio.play();
		}
		$("#yellowButton").click(yellowNum);



		function purpleNum(){

			yourNum += purple;
			$("#yourNumber").html("<h2>Your Number is<h2> " + yourNum);
			winLoss();
			audio.play();
		}
		$("#purpleButton").click(purpleNum);



		function winLoss(){

			if(yourNum > winNum){


			alert("You lose!");
			losses++;
			$("#losses").text("Losses: " + losses);
			reset();


		}else if(yourNum === winNum){


			alert("You win!");
			wins++;
			$("#wins").text("Wins: " + wins);
			reset();


		}else{

		}
	}
