var lastScrollTop = 0;
let move = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function() { 
var st = window.pageYOffset || document.documentElement.scrollTop; 
let chorki = document.querySelector(".chorki");
if (st > lastScrollTop){
   move = move + 10;
   chorki.style.transform = `rotate(${move}deg)`;
     
} else {
move = move - 10;
chorki.style.transform = `rotate(${move}deg)`;
}
lastScrollTop = st;
}, false);

