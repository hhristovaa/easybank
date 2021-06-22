// 'use strict';

//nav menu on mobile
const menuBtn = document.querySelector('.icon-menu');
const navigation = document.querySelector('.navigation__list');


menuBtn.addEventListener('click',()=>{
    if(navigation.classList.contains('active')){
        navigation.classList.remove('active')
    } else {
        navigation.classList.add('active')
    }
});



