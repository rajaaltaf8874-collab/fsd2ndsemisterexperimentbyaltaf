const heading = document.getElementById("heading");
const para = document.getElementById("para");
const input = document.getElementById("inputText");

let size = 40;

document
.getElementById("changeHeading")
.addEventListener("click", function () {

    if(input.value!="")
    {
        heading.innerHTML=input.value;
    }

});

document
.getElementById("changeBackground")
.addEventListener("click", function () {

    const colors=[
        "#a56d6d",
        "#38e0c2",
        "#8fd3c7",
        "#d6c1ff",
        "#ffd699"
    ];

    const random=
    colors[Math.floor(Math.random()*colors.length)];

    document.body.style.background=random;

});

document
.getElementById("increaseFont")
.addEventListener("click", function () {

    size=size+4;

    para.style.fontSize=size+"px";

});

document
.getElementById("toggleParagraph")
.addEventListener("click", function () {

    if(para.style.display==="none")
    {
        para.style.display="block";
    }
    else
    {
        para.style.display="none";
    }

});

document
.getElementById("reset")
.addEventListener("click", function () {

    heading.innerHTML="Welcome to JavaScript Lab";

    input.value="";

    para.style.display="block";

    para.style.fontSize="28px";

    document.body.style.background="#eeeeee";

    size=28;

});