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

  var $this = $(this),
    $card = $this.closest('.profession-card-block'),
    $cardTextMore = $card.find('.profession-card-text');

  if (!$card.hasClass('on')) {
    $card.addClass('on');
    $cardTextMore.slideDown(200);
    $this.html('Скрыть');
  } else {
    $card.removeClass('on');
    $this.html('Подробнее');
  }

});