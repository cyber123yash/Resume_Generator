function addNewWEField(){

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "enter here");


    let we0b = document.getElementById("we");
    let weAddButton0b = document.getElementById("weAddButton");

    we0b.insertBefore(newNode, weAddButton0b);
}

function addNewAQField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "enter here");


    let aq0b = document.getElementById("aq");
    let aqAddButton0b = document.getElementById("aqAddButton");

    aq0b.insertBefore(newNode, aqAddButton0b);


}

function generateCV() 
{

    let nameField = document.getElementById("nameField").value;

    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = nameField;

    document.getElementById("nameT2").innerHTML = nameField;

    document.getElementById("contactT").innerHTML = document.getElementById(
        "contactField"
        ).value;

    document.getElementById("addressT").innerHTML = document.getElementById(
        "addressField"
        ).value;


    document.getElementById("fbT").innerHTML = document.getElementById(
        "fbField"
        ).value;

    document.getElementById("instaT").innerHTML = document.getElementById(
        "instaField"
        ).value;

    document.getElementById("linkedT").innerHTML = document.getElementById(
        "linkedField"
        ).value;

    document.getElementById("objectiveT").innerHTML = document.getElementById(
        "objectiveField"
    ).value;  
    
    
    let wes=document.getElementsByClassName("weField");

    let str="";

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML = str;


    let aqs = document.getElementsByClassName("eqField");

    let str1="";

    for (let e of aqs) {
       str1 += `<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML = str1;

    document.getElementById('CV-form').style.display='none';
    document.getElementById('CV-template').style.display='block';


}

function printCV(){
window.print();

}

  


