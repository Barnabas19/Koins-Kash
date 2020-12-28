setTimeout(function() {
    $(".loader-bg").fadeToggle();
}, 1500);


/**LOG IN */

(function($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function() {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function() {
        $(this).focus(function() {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);
/**const mainDiv = document.querySelector('.mainDiv')

const cards = document.querySelectorAll('.space')

const prev = document.querySelector('.prev')

const next = document.querySelector('.next')

const dotsContainer = document.querySelector('.dots-container')

const mainContainer = document.querySelector('.main-container')


console.log(cards)

let numberOfCards = cards.length;
let SlideWidth = cards[0].clientWidth;
let currentSlide = 0;
let myCards = Array.from(cards)


function Slider() {
    myCards.forEach((element, i) => {
        element.style.left = i * 100 + '%';
    });
}

function goToSlide(slideNumber) {
    // mainDiv.style.transform= 'translateX(-' + SlideWidth * slideNumber + 'px)';
    mainDiv.style.transform = 'translateX(-' + 33.3 * slideNumber + '%)';
    currentSlide = slideNumber;
    SetActiveClass()
}

function dots() {
    for (let i = 0; i < numberOfCards; i++) {
        const singleDot = document.createElement('div');
        singleDot.classList.add('dot');
        dotsContainer.appendChild(singleDot);
        singleDot.addEventListener('click', () => {
            goToSlide(i)
        })
    }

    dotsContainer.children[0].classList.add('active');
}

next.addEventListener('click', () => {
    if (currentSlide >= numberOfCards - 1) {
        goToSlide(0)
        return
    }
    currentSlide++
    goToSlide(currentSlide)
})



prev.addEventListener('click', () => {
    if (currentSlide <= 0) {
        goToSlide(numberOfCards - 1)
        return
    }
    currentSlide--
    goToSlide(currentSlide)
})




function SetActiveClass() {

    // set active class for the cards
    let currentActive = document.querySelector('.space.active');
    currentActive.classList.remove('active');
    cards[currentSlide].classList.add('active');

    // set active classed for the dots
    let currentActiveDot = document.querySelector('.dot.active');
    currentActiveDot.classList.remove('active');
    dotsContainer.children[currentSlide].classList.add('active');
}




function SlideshowFunction() {
    if (currentSlide >= numberOfCards - 1) {
        goToSlide(0)
        return
    }
    currentSlide++
    goToSlide(currentSlide)

}



function SliderMain() {

    setInterval(() => {
        SlideshowFunction()
    }, 4000);

    Slider();
    dots()
}


SliderMain()**/