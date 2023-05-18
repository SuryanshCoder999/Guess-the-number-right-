playername = localStorage.getItem("playername");
var y = Math.floor(Math.random() * 10 + 1);
var guess = 1;
function submit()
{
    var x = document.getElementById("guessField").value;
    if(x==y)
    {
        alert("CONGRATS!!!  "+playername+" YOU GUESSED IT RIGHT IN "+  guess  + " GUESS");
        guess=1;
}
else if(x>y) {
    guess++;
    alert("OOPS SORRY!!! TRY A SMALLER NUMBER");
}
else {
    
    guess++;
    alert("OOPS SORRY!!! TRY A GREATER NUMBER");
}
}

function playagain()
{
    y = Math.floor(Math.random() * 10 + 1);
}
// count of attempts
// until hit

// function for the number sent by the user