require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import modals from './modules/modals';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import sliders from './modules/sliders';
import {openModal} from './modules/modals';

window.addEventListener('DOMContentLoaded', function() {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modals('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2024-05-20');
    cards();
    calc();
    forms('form', modalTimerId);
    sliders({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });

});

