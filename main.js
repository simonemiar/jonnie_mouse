import './style.css'

const cursor = document.querySelector("#cursor")
const theBody = document.querySelector("body")

window.addEventListener("mousemove",function(e){
    cursor.style.left = e.pageX;
    cursor.style.top = e.pageY;

    theBody.onclick = function(){
        console.log("hellow dannie")
    };

})