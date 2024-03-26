var heightWrapper = document.getElementsByClassName('footer')[0].getBoundingClientRect().bottom;

if(heightWrapper < $(window).height())
  heightWrapper = $(window).height();

for (var i = 0; i < 100; i++) {
    var star = '<div class="star" style="animation: twinkle '+((Math.random()*5) + 3)+'s linear '+((Math.random()*5) + 3)+'s infinite; top: '+Math.random()*heightWrapper+'px; left: '+Math.random()*$(window).width()+'px;"></div>';
    $('body').append(star);
  }