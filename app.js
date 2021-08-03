const menu = document.querySelector(".menu");

const navbar = document.querySelector(".navbar");

const closeIcon = document.querySelector("i");


menu.onclick = function () {
   if (navbar.style.height === '100vh') {
      navbar.style.height = '0vh';
      closeIcon.setAttribute('class', 'far fa-bars fa-2x');
      
   } else {
      navbar.style.height = '100vh';
      closeIcon.setAttribute('class', 'far fa-times fa-2x')
    }
}


const list = document.querySelectorAll('a')

list.forEach((item) = function(item) {
   item.addEventListener('click', function () {
      if (item.classList.contains('active') === false) {
         
         item.classList.add('active');
         navbar.style.height = '0vh';
           window.location.reload(true);
         closeIcon.setAttribute('class', 'far fa-bars fa-2x');
       
      } else if(item.classList.contains('active') === true){
         item.classList.remove('active');
         }
   })
})