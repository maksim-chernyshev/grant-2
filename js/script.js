const showMainForm = (state) => {
  document.querySelector('.form-window').style.display = state;
  document.querySelector('.form-fade-background').style.display = state;
    document.getElementById('html').classList.toggle('scroll-disable');
}

function switchFormState(loginState, signUpState, forgotPassState, socialsState, messageState) {
  document.querySelector('.form-login').style.display = loginState;
  document.querySelector('.form-signup').style.display = signUpState;
  document.querySelector('.form-forgot-pass').style.display = forgotPassState;
  document.querySelector('.form-socials').style.display = socialsState;
  document.querySelector('.form-message').style.display = messageState;
}

// const disableScrollY = () => {
//   document.getElementById('html').classList.toggle('scroll-disable');
// }


$(document).on('click', '.form-link', function(){
  $(this).addClass('form-link-active').siblings().removeClass('form-link-active')
})

$(document).on('click', '.university-footer-navigation__item', function(){
  $(this).addClass('university-footer-navigation__link--active').siblings().removeClass('university-footer-navigation__link--active')
})



$(document).ready(function () {

  var mySwiper1 = new Swiper('.girl-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    speed: 500,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })





  $('.button-hint').on('click', function () {
    $(this).toggleClass('active')
  })

  $(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".button-hint"); // тут указываем ID элемента
    var div1 = $(".drop-down"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
      &&
      div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.removeClass('active'); // скрываем его
    }

    if (!div1.is(e.target) // если клик был не по нашему блоку
      &&
      div1.has(e.target).length === 0) { // и не по его дочерним элементам
      div1.removeClass('open'); // скрываем его
    }
  });


  $('.prompt-button').on('click', function () {
    $('.naprav').focus()
  })

  $('.answer-button').on('click', function () {
    $('.thanks.popup, .layer').fadeIn()
  })

  $('.layer').on('click', function () {
    $('.popup, .layer').fadeOut()
  })

  $('.answer').on('click', function () {
    $('.answer').removeClass('pressed')
    $(this).addClass('pressed')
  })






  // partners
  var num = 2

  $('.partner-slider .swiper-slide:lt(' + num + ')').addClass('active ')

  $('.button-more').on('click', function () {
    event.preventDefault()


    num = num + 3
    $('.partner-slider .swiper-slide:lt(' + num + ')').addClass('active ')
    $('.partner-slider .swiper-wrapper').addClass('active');

    if ($('.partner-slider .swiper-slide:last').hasClass('active')) {
      //            $('.wrap-button-more').fadeOut()
      $('.button-more').css('visibility', 'hidden')
    }
  })
})

var swiper1 = new Swiper('.partner-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 1,
  // loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 460,
    depth: 0,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },

});



if (innerWidth < 768) {
  $('.button-hint').unwrap();
  swiper1.destroy();

  var mySwiper2 = new Swiper('.wrap-winners-mobile ', {
    // Optional parameters
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    speed: 500,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })

}



var check = 0

$(window).on('resize', function () {
  mySwiper2.destroy()

  var swiper1 = new Swiper('.partner-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 1,
    // loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 460,
      depth: 0,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
  var mySwiper2 = new Swiper('.wrap-winners-mobile ', {
    // Optional parameters
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    speed: 500,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })



  if (innerWidth < 768 && check === 0) {
    check = 1
    swiper1.destroy();

  } else {
    var swiper1 = new Swiper('.partner-slider', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      initialSlide: 1,
      // loop: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 460,
        depth: 0,
        modifier: 1,
        slideShadows: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })

  }

})

function dropDown() {
  var droplink = document.getElementsByClassName('select-field');
  for (var i = 0; i < droplink.length; i++) {
    if (event.target == droplink[i]) {
      droplink[i].classList.toggle('open')
      droplink[i].nextElementSibling.classList.toggle('open')
    }

  }
}

function closedropDown() {
  var droplink = document.getElementsByClassName('select-field');
  for (var i = 0; i < droplink.length; i++) {
    if (event.target !== droplink[i]) {
      droplink[i].classList.remove('open');
      droplink[i].nextElementSibling.classList.remove('open')
    }
  }

}


function selectVal() {
  var vaL = document.querySelectorAll('.drop-down.open li');
  var naprav = document.querySelectorAll('.naprav')[0];
  var selectedVal;

  for (var i = 0; i < vaL.length; i++) {
    vaL[i].classList.remove('selected');

    if (event.target == vaL[i]) {

      vaL[i].classList.add('selected');
      selectedVal = vaL[i].getAttribute('selected_value');

      naprav.value = (selectedVal)
      naprav.classList.remove('error-input')
      naprav.previousElementSibling.classList.remove('active')
    }

  }
}


$('form').submit(function (event) {
  event.preventDefault()
  // var form = $(this).siblings('form')
  var form = $(this).parent()
  var error = 0;


  form.find('input[type="text"], input[type="email"], input[type="date"], input[type="checkbox"]').each(function (i, elem) {
    var input = $(this);
    console.log(input)
    input.removeClass('error-input');

    if ((input.val() == '')) {
      input.addClass('error-input');
      input.prev().addClass('active');


    } else {
      input.prev().removeClass('active');
      input.next().next().removeClass('active');
    }
  })

  $("input").on('input', function () {
    $(this).removeClass('error-input')
    $(this).prev().removeClass('active')
  });


})

// function showMainForm(state) {
//   document.querySelector('.form-window').style.display = state;
//   document.querySelector('.form-fade-background').style.display = state;
// }

