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


    //tabs
    const tabsContainerWidth = document.querySelector('.tabs__content__container').offsetWidth,
    tabsContainerWHeight = document.querySelector('.tabs__content__container').offsetHeight;

    const tabsImgs = document.querySelectorAll('.tabs__image');

    setImagesSize(tabsImgs, tabsContainerWidth, tabsContainerWHeight);



    function setImagesSize(images, width, height) {
    
    images.forEach((item) => {
        console.log(images);
        console.log(width);
        console.log(height);
        item.style.width = width;
        item.style.height = height;
    });
    }

    const tabsPickers = document.querySelectorAll('.tabs__picker'),
          tabsContent = document.querySelectorAll('.tabs__content');

    let tabCounter = 0;

    hideTabs(tabsContent);
    showTab(tabsContent, tabsPickers);

    for(let i = 0; i < tabsContent.length; i++) {
        tabsPickers[i].addEventListener('click', () => {
            console.log('FDLKJSHF');
            tabCounter = i;
            hideTabs(tabsContent);
            showTab(tabsContent, tabsPickers);
        });
    }


    function showTab(tabs, tabsPicker) {
        tabs[tabCounter].classList.remove('_hidden');



        tabsPicker.forEach(item => {
            item.classList.remove('_active');
        });

        tabsPicker[tabCounter].classList.add('_active');
        
    }

    function hideTabs(tabs) {
        tabs.forEach(item => {
            item.classList.remove('_shown');
            item.classList.add('_hidden');
        });
    }
    




    //backgrounds
    initilizeBackgrounds();

    window.addEventListener('resize', () => {
        setTimeout(initilizeBackgrounds, 100);
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
        if(window.innerWidth > 914) {
            const tabsBackground = document.querySelector('.tabs__background'),
                  offerBackground = document.querySelector('.offer__background');
    
            const header = document.querySelector('.header'),
                  tabs = document.querySelector('.tabs'),
                  offer = document.querySelector('.offer');
    
            const tabsBackgroundHeight = header.offsetHeight + tabs.offsetHeight + 20,
                  tabsBackgroundWidth = window.innerWidth / 2,
                  tabsBackgroundRight = window.innerWidth / 2 - 15;
    
            const offerBackgroundTop = tabsBackgroundHeight + 25,
                  offerBackgroundWidth = window.innerWidth / 2,
                  offerBackgroundHeight = offer.offsetHeight;

            setBackground(tabsBackground, 0, tabsBackgroundRight, tabsBackgroundHeight, tabsBackgroundWidth, '#effdff');
            setBackground(offerBackground, offerBackgroundTop, 0, offerBackgroundHeight, offerBackgroundWidth, '#fafff0');
        }
    }
});