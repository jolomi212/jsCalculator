var operation = prompt("Operator: Type in ' * ', ' + ', ' / ', ' - ' \n For Multiplication, Addition, Division and Subtraction respectively. ")
var num1 = parseInt(prompt("First Number: "))
var num2 = parseInt(prompt("Second Number: "))

if (operation == "+"){
    var solution = num1 + num2
    // alert(solution)
}
else if (operation == "*"){
    var solution = num1 * num2
    // alert(solution)
}
else if (operation == "/"){
    var solution = num1 / num2
    // alert(solution)
}
else if (operation == "-"){
    var solution = num1 - num2
    // alert(solution)
}
else{
    alert("You did not enter a valid operator")
}

alert("The answer is "+ solution)