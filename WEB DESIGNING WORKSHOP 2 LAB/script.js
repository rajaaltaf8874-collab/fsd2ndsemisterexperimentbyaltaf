function checkNumber() {
    let num = document.getElementById("number").value;
    let result = document.getElementById("result");

    if(num === ""){
        result.innerHTML = "Please Enter a Number";
        result.style.color = "red";
    }
    else if(num % 2 == 0){
        result.innerHTML = num + " is Even Number";
        result.style.color = "green";
    }
    else{
        result.innerHTML = num + " is Odd Number";
        result.style.color = "orange";
    }
}