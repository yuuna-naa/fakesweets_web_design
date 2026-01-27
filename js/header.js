$(function(){
  	$("#menu").click(function(){
  		$("header").toggleClass("open");
  	});
});


$(function () {
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    const speed = 400;
    const href = $(this).attr('href');
    const target = href === '#' || href === ''
      ? $('html')
      : $(href);

    if (!target.length) return;

    const position = target.offset().top;

    $('html, body').animate(
      { scrollTop: position },
      speed,
      'swing'
    );
  });
});

