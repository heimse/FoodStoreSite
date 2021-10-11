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

    initilizeBackgrounds();

    window.addEventListener('resize', () => {
        initilizeBackgrounds();
    });

    function setBackground(background, top, left, height, width, backgroundColor) {
        background.style.cssText = `
        position: absolute;
        top: ${top + 'px'};
        left: ${left + 'px'};
        height: ${height + 'px'};
        width: ${width + 'px'};
        background-color: ${backgroundColor};
        z-index: -1;
        `;
    }
    
    function initilizeBackgrounds() {
        console.log(window.innerWidth);
        if(window.innerWidth > 914) {
            const tabsBackground = document.querySelector('.tabs__background'),
                  offerBackground = document.querySelector('.offer__background');
    
            const header = document.querySelector('.header'),
                  tabs = document.querySelector('.tabs'),
                  offer = document.querySelector('.offer');
    
            const tabsBackgroundHeight = header.offsetHeight + tabs.offsetHeight + 30,
                  tabsBackgroundWidth = window.innerWidth / 2,
                  tabsBackgroundRight = window.innerWidth / 2;
    
            const offerBackgroundTop = tabsBackgroundHeight,
                  offerBackgroundWidth = window.innerWidth / 2,
                  offerBackgroundHeight = offer.offsetHeight;

            setBackground(tabsBackground, 0, tabsBackgroundRight, tabsBackgroundHeight, tabsBackgroundWidth, '#effdff');
            setBackground(offerBackground, offerBackgroundTop, 0, offerBackgroundHeight, offerBackgroundWidth, '#fafff0');
        }
    }
});