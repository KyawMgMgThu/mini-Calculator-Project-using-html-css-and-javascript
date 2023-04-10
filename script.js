
let btn =document.getElementById("btnCalculator");
let result = document.getElementById("result");
let numOneError = document.getElementById("numOneError");
let numTwoError = document.getElementById("numTwoError");
let OperationError = document.getElementById("operationError");
let finalresult ;
let numOnestatus , 
    numTwostatus ,
    Operationstatus = false ;

numOneError.style.display = "none";
numTwoError.style.display = "none";
OperationError.style.display = "none";

btn.addEventListener("click", function(){
    let num1 = document.getElementById("first-number");
    let num2 = document.getElementById("sec-number");
    let Operators = document.getElementById("operation");
    // checkValidation(num1, num2, Operators);
    if(!numOnestatus && !numTwostatus && !Operationstatus){
        num1 = parseInt(num1.value);
        num2 = parseInt(num2.value);
       
        switch (Operators.value){
            case "add":
                finalresult = num1 + num2;
                break;
            case "minus":
                finalresult = num1 - num2;
                break;
            case "multiple":
                finalresult = num1 * num2;
                break;
            case "division":
                finalresult = num1 / num2;
                break;
            case "default":
                console.log("operation error");
                break;
            }
                result.innerHTML = finalresult;
        }
    });
    
    function checkValidation ( num1, num2, Operators){
        if (num1.value == "" || num1.value == null || num1.value == underfined){
            numOneError.style.display = "block";
            numOnestatus = true;
        }else{
            numOneError.style.display = "none";
            numOnestatus = false;
        }
        if (num2.value == "" || num2.value == null || num2.value == underfined){
            numTwoError.style.display = "block";
            numTwostatus = true;
        }else{
            numTwoError.style.display = "none";
            numTwoError = false;
        }
        if (Operators.value == "empty"){
            operationError.style.display = "block";
            operationstatus = true;
        }else{
            OperationError.style.display = "none";
            Operationstatus = false;
        }
    }