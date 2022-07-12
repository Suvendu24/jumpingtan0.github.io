var character = document.getElementById("character");
var block = document.getElementById("block");
var Start, endTime , diff;
sart();
function calcTime(){
    endTime = new Date;
    diff= endTime - Start;
    diff/=1000;
    return diff;}
function jump(){
    if (character.classList!="animate")
    character.classList.add("animate");
    setTimeout(function(){  
            character.classList.remove("animate")

    },500);
}
function sart(){
    Start= new Date();
}
var collision = setInterval(function () {
    var charaterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if ( blockLeft<60 && blockLeft>10 && charaterTop>=75 ){
        block.style.animation="none";
        block.style.display="none";
        window.alert("GAME OVER GG "+ calcTime());
        setTimeout(()=>{location.reload(true)},100);
    }
},10);



    