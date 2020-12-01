//select DOM items
const menubtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menunav = document.querySelector('.menu-nav');
const menubrand = document.querySelector('.menu-branding');
const navitems  = document.querySelectorAll('.nav-items');

// Set initial state of menu

let showmenu = false;

menubtn.addEventListener('click',togglemenu);

function togglemenu() {
    if(!showmenu)
    {
        menubtn.classList.add('close');
        menu.classList.add('close');
        menubrand.classList.add('close');
        menunav.classList.add('close');
        navitems.forEach(item => item.classList.add('show'));
    }
    else{
        menubtn.classList.remove('close');
        menu.classList.remove('close');
        menubrand.classList.remove('close');
        menunav.classList.remove('close');
        removeitems.forEach(item => item.classList.remove('show'));
    }
}