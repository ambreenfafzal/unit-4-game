
var crystalOne = Math.floor((Math.random() * 12) + 1);
var crystalTwo = Math.floor((Math.random() * 12) + 1);
var crystalThree = Math.floor((Math.random() * 12) + 1);
var crystalFour = Math.floor((Math.random() * 12) + 1);
// var x = crystalOne ;
// var y = crystalTwo ;
// var a = crystalThree ;
// var b = crystalFour ;
var crystalScore = 0;

var computerScore = Math.floor((Math.random() * 100) + 50);


document.getElementById("total-score").innerHTML = ("Score: " + computerScore);
// console.log(computerScore)

//When you click on the red crystal
$("#btn").on("click", function(){
    // console.log ("Red", crystalOne)
    crystalScore = crystalScore + crystalOne;
    // console.log("crystal total score" ,crystalScore )
     $("#userInput").text(crystalScore);
     
     if (crystalScore == computerScore) {
        winsLosses()
        stopClick()     
      
     } else if (crystalScore > computerScore ) {
        lost()
        stopClick() 
     }
});

//When you click on the blue crystal
$("#btn2").on("click", function(){
    // console.log ("Blue", crystalTwo)
    crystalScore = crystalScore + crystalTwo;
    // console.log("crystal total score" ,crystalScore )
     $("#userInput").text(crystalScore);
     if (crystalScore == computerScore) {
        winsLosses()
        stopClick()     
      
     } else if (crystalScore > computerScore ) {
        lost()
        stopClick() 
     }
});

//When you click on the yellow crystal
$("#btn3").on("click", function(){
    // console.log ("Yellow", crystalThree)
    crystalScore = crystalScore + crystalThree;
    // console.log("crystal total score" ,crystalScore )
     $("#userInput").text(crystalScore);
     if (crystalScore == computerScore) {
        winsLosses()
        stopClick()     
      
     } else if (crystalScore > computerScore ) {
        lost()
        stopClick() 
     }
});
     
//When you click on the Green crystal
$("#btn4").on("click", function(){
    // console.log ("Green", crystalFour)
    crystalScore = crystalScore + crystalFour;
    // console.log("crystal total score" ,crystalScore )
     $("#userInput").text(crystalScore);
     if (crystalScore == computerScore) {
        winsLosses()
        stopClick()     
      
     } else if (crystalScore > computerScore ) {
        lost()
        stopClick() 
     }
});


   
$("#restartGame").on("click", function(){
    // var a = crystalScore;
    // var b = computerScore;
    // // console.log(b);
    // // console.log(a);
    // a = 0;
    // b = Math.floor((Math.random() * 100) + 50);
    // $("#userInput").text(a);
    // $("#total-score").text(b);
    // $("#displaymessage").text("");
    
    // // console.log(b);
    location.reload();
        });

function winsLosses() {
    $("#displaymessage").text("Congratulations!!! You Won!!");
}

function lost() {
     $("#displaymessage").text("Sorry, you lost!");
}

function stopClick () {
    $("#btn").off("click")
    $("#btn2").off("click")
    $("#btn3").off("click")
    $("#btn4").off("click")
    }



   


   
