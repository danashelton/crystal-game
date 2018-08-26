
//sets up random number user is trying to match
$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+10)
    console.log('Target Number: ' + Random)
    $('#target').text(Random);


//	setting up four random numbers array, total variable and printing the wins & losses variables	
var GeneratedNumbers = []
var total= 0;	
var wins= 0;
var losses = 0;
$('#numberWins').text('Wins: ' + wins);
$('#numberLosses').text('Losses: ' + losses);		


//sets up random numbers for each crystal
function fourRandomNumbers(){
for (var i = 0; i < 4; i++) {
    var num = Math.floor(Math.random()*10+1);
    GeneratedNumbers.push(num);
}
}

// runs the function to assign randome number to each crystal
fourRandomNumbers();


//resets the game and console logs the record
function reset(){
    console.log('Crystal Values: ' + GeneratedNumbers);
    console.log('-----------------------')
    Random=Math.floor(Math.random()*101+10);
    console.log('Target Number: ' + Random)
    $('#target').text(Random);
    GeneratedNumbers = [];
    fourRandomNumbers();
    total = 0;
    $('#Combined').text('Your Score: '+ total);
    } 

//adds the wins to the scoreboard
function won(){
alert("You won!!!");
    wins++;	
    $('#numberWins').text('Wins: ' + wins);
    console.log('We Played. You Won. Whatever. ::kicks rocks::');
    reset();
}

//adds the losses to the scoreboard
function lost(){
alert ("You lose!!");
    losses++;
    $('#numberLosses').text('Losses: ' + losses);
    console.log('What in the crytal math were you smoking?!');
    reset();
}



//sets up click for crystals
    $('#one').on('click', function(){
        total = total + GeneratedNumbers[0];
        console.log("New total: " + total);
        $('#Combined').text('Your Score: ' + total);	

                //sets win/lose conditions
                if (total === Random){
                    won();
                }
                else if (total > Random){
                    lost();
                }		
    })	

    $('#two').on('click', function(){
        total = total + GeneratedNumbers[1];
        console.log("New total: " + total);
        $('#Combined').text('Your Score: ' + total);	

                if (total === Random){
                    won();
                }
                else if (total > Random){
                    lost();
                }	
    })	

    $('#three').on('click', function(){
        total = total + GeneratedNumbers[2];
        console.log("New total: " + total);
        $('#Combined').text('Your Score: ' + total);

                    if (total === Random){
                    won();
                }
                else if (total > Random){
                    lost();
                }	
    })	

    $('#four').on('click', function(){
        total = total + GeneratedNumbers[3];
        console.log("New total: " + total);
        $('#Combined').text('Your Score: ' + total);	

                    if (total === Random){
                    won();
                }
                else if (total > Random){
                    lost();
                }
    });  	

});	

