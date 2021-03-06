$(".product-detail__slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".product-detail__slider--nav",
});
$(".product-detail__slider--nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".product-detail__slider",
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 581,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
});
