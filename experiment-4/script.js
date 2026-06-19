function calculateResult(){

    let subjects = Number(document.getElementById("subjects").value);

    if(subjects<=0){

        alert("Enter valid number of subjects");
        return;

    }

    let total = 0;

    for(let i=1;i<=subjects;i++){

        let marks = Number(prompt("Enter marks for Subject " + i));

        total = total + marks;

    }

    let average = total / subjects;

    let grade;
    let result;

    if(average>=90){

        grade="A+";
        result="Pass";

    }

    else if(average>=75){

        grade="A";
        result="Pass";

    }

    else if(average>=60){

        grade="B";
        result="Pass";

    }

    else if(average>=40){

        grade="C";
        result="Pass";

    }

    else{

        grade="F";
        result="Fail";

    }

    document.getElementById("output").innerHTML=

    "<h2>Result</h2>" +

    "<p><b>Total Marks:</b> " + total + "</p>" +

    "<p><b>Average Marks:</b> " + average.toFixed(2) + "</p>" +

    "<p><b>Grade:</b> " + grade + "</p>" +

    "<p><b>Result:</b> " + result + "</p>";

}