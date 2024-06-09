const buttonElements = [
    document.getElementById("buttonSL"),
    document.getElementById("buttonVigor"),
    document.getElementById("buttonAttunement"),
    document.getElementById("buttonEndurance"),
    document.getElementById("buttonVitality"),
    document.getElementById("buttonStrength"),
    document.getElementById("buttonDexterity"),
    document.getElementById("buttonIntelligence"),
    document.getElementById("buttonFaith"),
    document.getElementById("buttonLuck"),
];
const buttons = [false, true, null, null, null, null, null, null, null, false];
const classes = ['Knight', 'Mercenary', 'Warrior', 'Herald', 'Thief', 'Assassin', 'Sorcerer', 'Pyromancer', 'Cleric', 'Deprived'];
const values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//(Soul) Level, Vigor, Attunement, Endurance, Vitality, Strength, Dexterity, Intelligence, Faith, Luck
const attributes = [
    [9, 12, 10, 11, 15, 13, 12, 9, 9, 7],
    [8, 11, 12, 11, 10, 10, 16, 10, 8, 9],
    [7, 14, 6, 12, 11, 16, 9, 8, 9, 11],
    [9, 12, 10, 9, 12, 12, 11, 8, 13, 11],
    [5, 10, 11, 10, 9, 9, 13, 10, 8, 14],
    [10, 10, 14, 11, 10, 10, 14, 11, 9, 10],
    [6, 9, 16, 9, 7, 7, 12, 16, 7, 12],
    [8, 11, 12, 10, 8, 12, 9, 14, 14, 7],
    [7, 10, 14, 9, 7, 12, 8, 7, 16, 13],
    [1, 10, 10, 10, 10, 10, 10, 10, 10, 10]
];
const changeButton = (value) => {
    if (buttons[value] == null) {
        buttons[value] = true;
        buttonElements[value].style.backgroundColor = "green";
        buttonElements[value].style.color = "white";
    }
    else if (buttons[value] == true) {
        buttons[value] = false;
        buttonElements[value].style.backgroundColor = "red";
        buttonElements[value].style.color = "white";
    }
    else if (buttons[value] == false) {
        buttons[value] = null;
        buttonElements[value].style.backgroundColor = "white";
        buttonElements[value].style.color = "black";
    }
}
function getBestClass() {
    let total;
    for (let i = 0; i < attributes.length; i++) {
        total = 0;
        for (let j = 0; j < attributes[i].length; j++) {
            if (buttons[j] != null)
                if (buttons[j])
                    total = total + attributes[i][j];
                else
                    total = total - attributes[i][j];
       }
       values[i] = total;
       console.log("Total for "+classes[i]+" is: "+total);
    }
    let most = values[0];
    for (i = 1; i < values.length; i++)
        if (most < values[i])
            most = values[i];
    let bestClasses = [];
    for (let i = 0; i < values.length; i++)
        if (most == values[i])
            bestClasses.push(classes[i]);
    console.log("Best classes are: "+bestClasses);
    document.getElementById('bestClass').innerHTML = bestClasses[0];
    if (bestClasses.length > 1)
        for (let i = 1; i < bestClasses.length; i++)
            document.getElementById('bestClass').innerHTML += ', '+bestClasses[i];
}