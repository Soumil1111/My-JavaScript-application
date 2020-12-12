document.getElementById("agelabel").innerHTML="Age     :"
//This function is called when button is triggered"
function buttontrig(){
    var displayname=document.getElementById("input1").value;
    displayemail=document.getElementById("input3").value;
    displayage=document.getElementById("input2").value;
    if(displayname==""){}
    if(displayage==""){}
    if(displayemail==""){}
    else{ newwindow=document.createElement("h2");
          newwindow.innerHTML="You are successfully registered "+displayname;
          oldwindow=document.getElementById("form1");
          mainwindow=document.getElementById("div1");
          mainwindow.replaceChild(newwindow,oldwindow);
        }
}
