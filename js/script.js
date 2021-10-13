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
    const tabsPickers = document.querySelectorAll('.tabs__picker'),
          tabsContent = document.querySelectorAll('.tabs__content'),
          tabsImages = document.querySelectorAll('.tabs__image-wrapper'),
          tabsDescr = document.querySelectorAll('.tabs__descr');

    let tabCounter = 0;

    console.log(tabsImages);

    hideTabs(tabsContent);
    showTab(tabsContent, tabsPickers, tabsDescr, tabsImages);

    for (let i = 0; i < tabsContent.length; i++) {
        tabsPickers[i].addEventListener('click', () => {
            tabCounter = i;
            hideTabs(tabsContent);
            showTab(tabsContent, tabsPickers, tabsDescr, tabsImages);
        });
    }


    function showTab(tabs, tabsPicker, descr, tabsImgs) {
        tabs[tabCounter].classList.remove('_hidden');


        tabsImgs.forEach(item => item.classList.remove('_fade-in'));
        descr.forEach(item => item.classList.remove('_fade-in'));

        tabsImgs[tabCounter].classList.add('_fade-in');
        descr[tabCounter].classList.add('_fade-in');

        tabsPicker.forEach(item => {
            item.classList.remove('_active');
        });

        tabsPicker[tabCounter].classList.add('_active');
    }

    function hideTabs(tabs) {
        tabs.forEach(item => {
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
        const wrapper = document.querySelector('.wrapper');
        if (wrapper.clientWidth > 914) {
            const tabsBackground = document.querySelector('.tabs__background'),
                  offerBackground = document.querySelector('.offer__background');

            const header = document.querySelector('.header'),
                tabs = document.querySelector('.tabs'),
                offer = document.querySelector('.offer');

            const tabsBackgroundHeight = header.offsetHeight + tabs.offsetHeight + 20,
                tabsBackgroundWidth = window.innerWidth / 2,
                tabsBackgroundRight = window.innerWidth / 2;

            const offerBackgroundTop = tabsBackgroundHeight + 25,
                offerBackgroundWidth = window.innerWidth / 2,
                offerBackgroundHeight = offer.offsetHeight;

            setBackground(tabsBackground, 0, tabsBackgroundRight, tabsBackgroundHeight, tabsBackgroundWidth, '#effdff');
            setBackground(offerBackground, offerBackgroundTop, 0, offerBackgroundHeight, offerBackgroundWidth, '#fafff0');
        }
    }
});