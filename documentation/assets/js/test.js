
$('.tp-accordion-seo .tp-accordion-item').on("click", handleSlide); 

function handleSlide(){
  $(this).addClass('tp-accordion-active').siblings().removeClass('tp-accordion-active');

  $('#toolest-thumb-wrapper').removeClass().addClass($(this).attr('rel'));

  $('.tp-accordion-seo .tp-accordion-item.tp-accordion-active').siblings().find('.tp-accordion-content').slideUp();

  $('.tp-accordion-seo .tp-accordion-item.tp-accordion-active .tp-accordion-content').slideDown();

}

setInterval(() => {
  handleSlide()
}, 2000);

$('.tp-accordion-seo .tp-accordion-item.tp-accordion-active .tp-accordion-content').slideDown();