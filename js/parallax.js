
if (process.browser) {
  document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".animated_banner img").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

window.addEventListener('scroll', function() {
  let nav = document.querySelector(".navbar-expand-lg");
  if(window.scrollY > nav.offsetHeight){
    nav.classList.toggle('active');
  }


});

 }