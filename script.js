var buy = document.getElementById('buy');
var modal = document.getElementById('myModal');
var close = document.getElementById('myClose');
var content = document.getElementById('myContent');

function opacity1() {
    content.style.opacity = "1";
}

function displayNone() {
    modal.style.display = "none"
}

buy.onclick = function(){
    modal.style.display = "block";
    setTimeout(opacity1, 100);
};

close.onclick = function(){
    content.style.opacity = "0";
    setTimeout(displayNone, 1000);
}