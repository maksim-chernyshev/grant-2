jQuery('.content-description').readmore({
    maxHeight: 100,
    speed: 70,
    collapsedHeight: 170,
    heightMargin: 16,
    moreLink: '<a href="#" class="toggle-content-text">Подробнее</a>',
    lessLink: '<a href="#" class="toggle-content-text">Свернуть</a>',
    embedCSS: true
});

$('.card-more').on('click', function(e) {
    e.preventDefault();
  
    var $card = $(this).closest('.profession-card-block');
  
    if (!$card.hasClass('on')) {
      $card.addClass('on');
      $('.profession-card-text-more').slideDown(200);
    } else {
      $card.removeClass('on');
      $('.profession-card-text-more').slideUp(200);
    }
  
  });