function LoadTools()
{
    var output = document.getElementById("diceOutput");
    
    var diceroll = document.getElementById("diceRoll");
    
    if (localStorage.getItem("lastRoll"))
    {
        var lastroll = localStorage.getItem("lastRoll");
    
        output.outerHTML = lastroll;
    }
}


function RollDice(frm)
{    
    var numDiceObj = findChildByID(frm, "numDice", true);
    var numSidesObj = findChildByID(frm, "numSides", true);

    var numDice = parseInt(numDiceObj.value);
    var numSides = parseInt(numSidesObj.value);

    var rolls = [numDice];
    var response = "";

    for (var i = 0; i < numDice; i++)
    {
        rolls[i] = (Math.floor(Math.random() * numSides)) + 1;
        response += "</br><h3 style='text-align:center'>Rolled " + rolls[i] + "</h3>";
    }

    localStorage.setItem("lastRoll", response);
    localStorage.setItem("numDice", numDice);
    localStorage.setItem("numSides", numSides);
    
}
