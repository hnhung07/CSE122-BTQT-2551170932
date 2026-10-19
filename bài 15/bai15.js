let expression = "";
let result = document.getElementById("result");
let history = document.getElementById("history");
let buttons = document.getElementById("buttons");

let keys = [
    "C", "()", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
];

for (let i = 0; i < keys.length; i++) {
    let button = document.createElement("button");
    button.innerText = keys[i];

    if (keys[i] == "C") {
        button.className = "clear";
    } else if (keys[i] == "+" || keys[i] == "-" || keys[i] == "*" || keys[i] == "/" || keys[i] == "%" || keys[i] == "()") {
        button.className = "operator";
    } else if (keys[i] == "=") {
        button.className = "equal";
    } else if (keys[i] == "0") {
        button.className = "zero";
    }

    button.onclick = function() {
        let value = keys[i];

        if (value == "C") {
            expression = "";
            result.innerText = "0";
            history.innerText = "";
        } else if (value == "=") {
            calculate();
        } else if (value == "()") {
            expression += "(";
            result.innerText = expression;
        } else {
            expression += value;
            result.innerText = expression;
        }
    };
    buttons.appendChild(button);
}

function calculate() {
    if (expression == "") {
        return;
    }
    let answer = eval(expression);
    history.innerText = expression;
    result.innerText = answer;
    expression = String(answer);
}
