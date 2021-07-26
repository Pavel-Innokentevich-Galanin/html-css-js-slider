var k = document.querySelectorAll('.page__slider > .slider__slide').length - 1;
var i = k;

function slider__right() {
    if (i >= k) {
        document.querySelectorAll('.page__slider > .slider__slide')[k].style.display = 'none';
        document.querySelectorAll('.page__slider > .slider__slide')[0].style.display = 'block';
    } else {
        document.querySelectorAll('.page__slider > .slider__slide')[i].style.display = 'none';
        document.querySelectorAll('.page__slider > .slider__slide')[i + 1].style.display = 'block';
    }
    if (i >= k)
        i = 0;
    else i++;
}

function slider__left() {
    if (i <= 0) {
        document.querySelectorAll('.page__slider > .slider__slide')[0].style.display = 'none';
        document.querySelectorAll('.page__slider > .slider__slide')[k].style.display = 'block';
    } else {
        document.querySelectorAll('.page__slider > .slider__slide')[i].style.display = 'none';
        document.querySelectorAll('.page__slider > .slider__slide')[i - 1].style.display = 'block';
    }
    if (i <= 0)
        i = k;
    else i--;
}

function start_slider() {
    slider__right();
    setInterval(function() {
        slider__right();
    }, 3000);
}

start_slider();