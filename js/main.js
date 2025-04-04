
const rightImage = document.getElementById('rightswipe');


rightImage.addEventListener('click', () => {
  rightImage.classList.add('clicked'); 
  rightImage.style.pointerEvents = 'none'; 
});


const leftImage = document.getElementById('leftswipe');


leftImage.addEventListener('click', () => {
  leftImage.classList.add('clicked'); 
  leftImage.style.pointerEvents = 'none'; 
});

const main = document.getElementById("main");

main.addEventListener("mousemove", function(e) {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const offsetX = (centerX - e.pageX) / 40;
  const offsetY = (centerY - e.pageY) / 40;

  document.querySelector(".green1").style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  document.querySelector(".green2").style.transform = `translate(${offsetX / 2}px, ${offsetY / 2}px)`;
  document.querySelector(".green3").style.transform = `translate(${offsetX}px, ${offsetY / 2}px)`;
  document.querySelector(".green4").style.transform = `translate(${offsetX / 1.5}px, ${offsetY / 3}px)`;
});

