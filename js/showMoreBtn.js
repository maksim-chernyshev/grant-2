let similarUniversitiesNum = 2;
$('.similar-universities .university-card-block:lt(' + similarUniversitiesNum + ')').addClass('university-card-block--active')

$('.similar-universities__show-more-button').on('click', function () {
    event.preventDefault()


    similarUniversitiesNum = similarUniversitiesNum + 2
    $('.university-card-block:lt(' + similarUniversitiesNum + ')').addClass('university-card-block--active')
    // $('.university-card-block').addClass('university-card-block--active');

    if ($('.university-card-block:last').hasClass('university-card-block--active')) {
        //            $('.wrap-button-more').fadeOut()
        $('.similar-universities__show-more-button').css('visibility', 'hidden')
    }
})

let resultsUniversities = 2;
$('.search-results .university-card-block:lt(' + resultsUniversities + ')').addClass('university-card-block--active')

$('.search-results__show-more').on('click', function () {
    event.preventDefault()


    resultsUniversities = resultsUniversities + 2
    $('.university-card-block:lt(' + resultsUniversities + ')').addClass('university-card-block--active')
    // $('.university-card-block').addClass('university-card-block--active');

    if ($('.university-card-block:last').hasClass('university-card-block--active')) {
        //            $('.wrap-button-more').fadeOut()
        $('.search-results__show-more').css('visibility', 'hidden')
    }
})


let majorsNum = 10;
$('.general-info__majors-list-item:lt(' + majorsNum  + ')').addClass('general-info__majors-list-item--active')

$('.general-info__show-more-button').on('click', function () {
    event.preventDefault()


    majorsNum  = majorsNum  + 10
    $('.general-info__majors-list-item:lt(' + majorsNum  + ')').addClass('general-info__majors-list-item--active')
    // $('.university-card-block').addClass('university-card-block--active');

    if ($('.general-info__majors-list-item:last').hasClass('general-info__majors-list-item--active')) {
        //            $('.wrap-button-more').fadeOut()
        $('.general-info__show-more-button').css('display', 'none')
    }
})

let unitNum = 5;
$('.general-info__list--small .general-info__list-item:lt(' + unitNum  + ')').addClass('general-info__list-item--active')

$('.general-info__show-details').on('click', function () {
    event.preventDefault()


    unitNum  = unitNum  + 5
    $('.general-info__list--small .general-info__list-item:lt(' + unitNum  + ')').addClass('general-info__list-item--active')
    // $('.university-card-block').addClass('university-card-block--active');

    if ($('.general-info__list--small .general-info__list-item:last').hasClass('general-info__list-item--active')) {
        //            $('.wrap-button-more').fadeOut()
        $('.general-info__show-details').css('visibility', 'hidden')
        $('.general-info__list-wrapper').css('display', 'none')
    }
})


    let prizeNum = 6;
$('.prize-card:lt(' + prizeNum  + ')').addClass('prize-card--active')

$('.prize-cards__show-more').on('click', function () {
    event.preventDefault()

    prizeNum  = prizeNum  + 3
    $('.prize-card:lt(' + prizeNum  + ')').addClass('prize-card--active')

    if ($('.prize-card:last').hasClass('prize-card--active')) {
        $('.prize-cards__show-more').css('display', 'none')
    }
})

