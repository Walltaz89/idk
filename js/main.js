
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

