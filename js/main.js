'use strict';

{
  const header = document.querySelector('header');
  const MenuBtn =document.querySelector('.menu-btn');

  MenuBtn.addEventListener('click', ()=> {
    header.classList.toggle('open');
  });

}