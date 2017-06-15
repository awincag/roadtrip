var btn = document.getElementsByClassName('copied');
// var btn = document.getElementById('btn');
var message = document.getElementById('msg');
var failMessage = document.getElementById('f-msg');





var message = document.getElementById('msg');
var failMessage = document.getElementById('f-msg');
var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        message.classList.remove('content-open');
    }
};

for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        failMessage.classList.remove('content-open');
    }
};

var body = document.body;
var menuButton = document.getElementById('menu-nav');
var menu = document.getElementById('menu');
var content = document.getElementById('content');

// menuButton.addEventListener('click', function (e) {
//     menu.classList.add('active');
//     body.classList.add('body-height-fixed');
//     e.preventDefault();
// });
//


// var page = document.getElementById('page-transition');
// var btn = document.getElementById('close')
//
// btn.addEventListener('click', function (e) {
//     page.classList.add('page-close');
// });

$(document).ready(function() {
  $(".dates--list-item").each(function() {
    $(this).mouseenter(function() {
      var target = $(this).data("target");
      $('[data-target="'+target+'"]').addClass("hovered");
    });

    $(this).mouseleave(function() {
      var target = $(this).data("target");
      $('[data-target="'+target+'"]').removeClass("hovered");
    });
  });

  $(document).scroll(function() {
    var months = $(".calendar--header");
    var jump = $(".calendar--jump");
    var staticTitle = months[0];
    var firstMonth = months[1];
    var lastMonth = months[4];

    if (window.pageYOffset >= firstMonth.offsetTop && window.pageYOffset <= lastMonth.offsetTop ) {
      $(staticTitle).addClass("active");
      $(jump).addClass("active");
    } else {
      $(staticTitle).removeClass("active");
      $(jump).removeClass("active");
    }

    var selectedMonth = null;
    months.each(function() {
      if (window.pageYOffset >= this.offsetTop) {
        selectedMonth = this;
      }
    });

    if (selectedMonth) {
      var monthName = $(selectedMonth).find('.header-title-item').first().html();
      $(staticTitle).find('.header-title-item').first().html(monthName);
    }
  });
});
