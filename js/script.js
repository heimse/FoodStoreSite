window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //burger
    
    const burgerTrigger = document.querySelector('.burger-menu'),
          body = document.querySelector('body'),
          burgerBody = document.querySelector('.burger__body');

    burgerTrigger.addEventListener('click', () => {
        burgerTrigger.classList.toggle('_active');
        burgerBody.classList.toggle('_active');
        body.classList.toggle('_lock');
    });

    //popup
    const popup = this.document.querySelector('.popup');
    //!Change trigger in real project
    // .addEventListener('click', () =>{
    //     popup.classList.toggle('_visible');
    // });


    //s
});