function about(){
    document.getElementById("information1").style.display = "block";
    document.getElementById("information2").style.display = "none";
    document.getElementById("information3").style.display = "none";
}

function contact(){
    document.getElementById("information2").style.display = "block";
    document.getElementById("information1").style.display = "none";
    document.getElementById("information3").style.display = "none";
}

function services(){
    document.getElementById("information3").style.display = "block";
    document.getElementById("information1").style.display = "none";
    document.getElementById("information2").style.display = "none";
}

function change_text(obj, text){
    obj.innerText = text;
}