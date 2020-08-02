var preloader = document.querySelector("#preloader");
var nav = document.querySelector("nav");
var Text =  document.querySelector("h1");
var strText = Text.textContent;
var splitText = strText.split("");
console.log(splitText);
Text.textContent = "";

for(let i=0;i<splitText.length;i++){
    let char = (splitText[i] === " ") ? "&nbsp;" : splitText[i];
    Text.innerHTML += "<span>" + char + "</span>";
}

setTimeout(function(){
    let it = 0;
    let timer = setInterval(ontick,50);

    function ontick(){
        const span = Text.querySelectorAll('span')[it];
        span.classList.add('fade');
        it++;
    
        if(it === splitText.length){
            complete();
            return;
        }
    }
    
    function complete(){
        clearInterval(timer);
        timer = null;
    }
},2500)

function wave(){
    setTimeout(function(){
        preloader.style.opacity = 0;
    },1000)
    setTimeout(function(){
        preloader.style.display = 'none';
    },1500)
}

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.style.backgroundColor = "rgb(0,0,0,0.8)";
  } else {
    nav.style.backgroundColor = "rgb(0,0,0,0.3)";
  }
}