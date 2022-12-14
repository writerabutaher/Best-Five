let count = 1;

// seleceted function 
function selectedElement(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;

    const newRow = document.createElement("tr");

    const playerNo = document.createElement("th");
    playerNo.innerText = count;
    newRow.appendChild(playerNo);

    const newPlayer = document.createElement("th");
    newPlayer.innerText = playerName;
    newRow.appendChild(newPlayer);

    const tableBody = document.getElementById("table-body");

    if (count <= 5) {
        tableBody.appendChild(newRow);
        count++
    }
    else {
        return alert("You Already Added 5 Players")
    }

    const btnNone = element;
    btnNone.setAttribute("disabled", true);
}

// common function 
function inputField(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputValue.value);
    return inputFieldValue;
}

// calculate function 
document.getElementById("calculate-btn").addEventListener("click", function () {
    const tableBody = document.getElementById("table-body");
    const playerNo = parseFloat(tableBody.lastChild.children[0].innerText);
    const budgetValue = inputField("player-budget");

    const calculate = playerNo * budgetValue;

    // error message 
    if (isNaN(budgetValue) == true) {
        alert("Please Insert A Number")
    }
    else {
        document.getElementById("expenses").innerText = calculate;
    }
})

// calculate total function
document.getElementById("calculate-total-btn").addEventListener("click", function () {
    const expenses = parseFloat(document.getElementById("expenses").innerText);
    const managerValue = inputField("manager-value");
    const coachValue = inputField("coach-value")

    const calculateTotal = expenses + managerValue  + coachValue;
    
    // error message
    if (isNaN(managerValue) == true || isNaN(coachValue) == true) {
        alert ("Please Insert A Number")
    }
    else {
        document.getElementById("total").innerText = calculateTotal;
    }
})