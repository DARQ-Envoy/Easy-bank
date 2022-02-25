const hamburger=document.querySelector(".hamburger");
const firstArticle=document.querySelector(".first-article");
const aside=document.querySelector(".aside");
const bigBox=document.querySelector(".big-box");
let box=document.querySelector(".box");;
console.log(firstArticle)
console.log(hamburger);
let navOn=false;
hamburger.addEventListener("click",()=>{
     if(!navOn){
         trans()
        hamburger.style.transform="rotate(90deg)"
        hamburger.src="images/icon-close.svg";
        hamburger.style.height="20px";
        box.style.visibility="visible";
        navOn=true;
      bigBox.style.transform="scale(1)";
      box.style.opacity="1";
      box.style.transform="translate(-50%,-50%)scale(1)";
    //   box.style.transition="all 1.2s ease-in-out";
  
    }
    else if(navOn){
        trans()
        hamburger.style.transform="rotate(0deg)"
        hamburger.src="images/icon-hamburger.svg";
        hamburger.style.height="20px";
        // box.style.display="none";
        bigBox.style.transform="scale(0)"
        box.style.visibility="hidden";
        navOn=false;
        box.style.opacity="0";
        box.style.transform="translate(-50%,-50%) scale(0)";
        // box.style.transition="none";
        // firstArticle.style.filter="brightness(100%)"
    }
})
function trans(){
    box.style.transition="all 3s ease-in-out";
}