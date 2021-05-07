
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}





$(document).ready(function() {

    $(window).scroll( function(){
     $('.fadein').each( function(i){

             

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();

            var bottom_of_window = $(window).scrollTop() + $(window).height();

             

            if( bottom_of_window > bottom_of_element ){

                $(this).animate({'opacity':'1'},1000);

            }

             

        });

    });

});


$(document).ready(function() {
    $(window).scroll( function(){

        $('.fadeinleft').each( function(i){

             

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();

            var bottom_of_window = $(window).scrollTop() + $(window).height();

             

            if( bottom_of_window > bottom_of_element ){

                $(this).animate({'opacity':'1','margin-left':'0px','marginRight':'3px'},1000+500*i);

            }
         });
      });
  });

$(document).ready(function() {
    $(window).scroll( function(){

        $('.fadeinlefts').each( function(i){

             

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();

            var bottom_of_window = $(window).scrollTop() + $(window).height();

             

            if( bottom_of_window > bottom_of_element ){

                $(this).animate({'opacity':'1','margin-left':'0px','marginRight':'3px'},1002);

            }
         });
      });
  });



$(document).ready(function() {
    $(window).scroll( function(){

        $('.fadeinleftss').each( function(i){

             

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();

            var bottom_of_window = $(window).scrollTop() + $(window).height();

             

            if( bottom_of_window > bottom_of_element ){

                $(this).animate({'opacity':'1','margin-left':'0px','marginRight':'3px'},1004);

            }
         });
      });
  });



















var checkScrollBars = function() {
    var b = $('body');
    var normalw = 0;
    var scrollw = 0;
    normalw = window.innerWidth;
    scrollw = normalw - b.width();

    var plusScrollBar = 'calc(' + '100% + ' + scrollw + 'px)'
    document.querySelector('body').style.minWidth = plusScrollBar;
}();



function myFunction(x) {
  x.classList.toggle("change");
}




$(document).ready(function(){
  var pages=window.location.href;
  var pageid=pages.substring(pages.lastIndexOf('#')-1);
if(pageid=='home')
{
  $("html, body").animate({
    scrollTop:$(pageid).offset().top-20
  },1000);
}
else if(pageid=='About')
{
  $("html, body").animate({
    scrollTop:$(pageid).offset().top-20
  },1000);
}
else if(pageid=='awards')
{
  $("html, body").animate({
    scrollTop:$(pageid).offset().top-20
  },1000);
}

else if(pageid=='parts')
{
  $("html, body").animate({
    scrollTop:$(pageid).offset().top-20
  },1000);
}
else if(pageid=='contact')
{
  $("html, body").animate({
    scrollTop:$(pageid).offset().top-20
  },1000);
}

else if(pageid=='join')
{
  $("html, body").animate({
    scrollTop:$(pageid).offset().top-20
  },1000);
}



});