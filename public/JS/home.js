var preloader = document.querySelector("#preloader");
var nav = document.querySelector("nav");
var navtxt = document.querySelector(".nav-container")
var Text =  document.querySelector("h1");
var btn = document.querySelector(".new");
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
        nav.style.opacity = 1;
        btn.classList.add('animate');
    },2000)
}

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.style.backgroundColor = "rgba(250,250,250,0.6)";
    navtxt.style.color = 'black';
    nav.classList.add('shadow');
  } else {
    nav.style.backgroundColor = "rgba(0,0,0,0.3)";
    navtxt.style.color = 'white';
    nav.classList.remove('shadow');
  }
}