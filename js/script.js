$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $(".red-box").fadeOut(2000);
  // $(".red-box").fadeIn(2000);
  // $(".green-box").fadeOut(2000);
  // $(".green-box").fadeIn(2000);
  // $(".blue-box").fadeOut(2000);
  // $(".blue-box").fadeIn(2000);
  // $(".red-box").fadeTo(1000, 0.2);
  // $(".green-box").fadeTo(1000, 0.4);
  // $(".blue-box").fadeTo(1000, 0.6);
  // $(".blue-box").slideUp(4000);
  // $(".blue-box").slideDown(3000);
  // $("p").hide();
  // $("p").slideDown(3000);
  // $(".blue-box").animate(
  //   {
  //     "margin-left": "200px"
  //   }, 2000, "swing"
  // );
  // $(".blue-box").animate(
  //   {
  //     "margin-left": "-=200px"
  //   }, 2000, "swing"
  // );
  // fading the blue box after moving it to the right
  // $('.blue-box').animate(
  //   {
  //     marginLeft: "200px",
  //     opacity: "0",
  //     height: "50px",
  //     width: "50px",
  //     marginTop: "25px"
  //   }, 1500
  // )
  
  // animating the font size
  // $('p').animate(
  //   {
  //     fontSize: "20px"
  //   }, 1000
  // );
  // chaining and delaying animations
  // $('.red-box').fadeTo(1500, 0.2);
  // $('.green-box').delay(1000).fadeTo(1500, 0.5);
  // $('.blue-box').delay(2000).fadeTo(1500, 0.8);

  // using callback functions to delay animations
  // $('.red-box').fadeTo(1500, 0.3, function () {
  //   $('.green-box').slideUp(1500, function () {
  //     $('.green-box').slideDown(1500, function () {
  //       $('.blue-box').fadeTo(1500, 0.85);
  //     })
  //   })
  // });
  // jquery code to prompt lightbox sign up
  // $('.lightbox').delay(500).fadeIn(1000);

  // manipulating tags with css selectors
  // $('p:first').css('background-color', 'rgba(180,180,30,0.8)');
  // $('.red-box').css('background-color', 'rgba(180,180,30,0.6)');
  // $('#list').css('background-color', 'rgba(180,180,30,0.6)');
  // $('ul:last').css('background-color', 'rgba(180,180,30,0.6)');
  // $('li:even').css('background-color', 'rgba(180,180,30,0.6)');
  // $("input:text").css('background-color', 'rgba(180,180,30,0.6');

  // jquery traversals of elements
  // $('#list').find("li").css('background-color', 'rgba(180,180,30,0.6)');
  // $('#list').children("li").css('background-color', 'rgba(180,180,30,0.8)');
  // $('#list').parent().css('background-color', 'rgba(180,180,30,0.8)');
  // $('#list').siblings(':header').css('background-color', 'rgba(180,180,30)');
  // $('#list').prev().css('background-color', 'rgba(180,180,30)'); //
  $(':header').next().css("background-color", "rgba(180,180,30,0.8)"); //
  $('form').children('input:text').css('background-color', 'rgba(180,180,30,0.8');

  // Methods for filtering input
  // find all the even list items
  // $('#list').find('li').filter(":even").css('background-color', "rgba(180,180,30,0.8)");
  // find all the even list items which are direct children
  // $('#list').children("li").filter(":even").css('background-color', "rgba(180,180,30,0.8)");
  // writing a custom function to filter even numbered list items
  // $('li').filter((index) => index % 2 === 0).css('background-color', 'rgba(180,180,30,0.6');
  // A built-in function to filter even numbered list items
  // $('li').filter(':even').css('background-color', 'rgba(180,180,30,0.6');
  // A built-in function to filter the last item in the list
  // $('li').last().css('background-color', 'rgba(180,180,30,0.6');
  // A built-in function to filter the number 5th list item in the list
  // $('li').eq(3).css('background-color', 'rgba(180,180,30,0.6');
  // Coloring the list items except the first one
  $('li').not(":first").css('background-color', 'rgba(180,180,30,0.6');
});
$(function () {
  $('ul ul:first').append('<li>I am the sub item.</li>');
  $('<li>I am the last item</li>').appendTo($('ul ul:first'));
  $('ul ul').prepend('<li class="firstItem">I am gonna be the first item</li>');
  $('<li class="secondItem">I am gonna be the second item</li>').appendTo($('ul li ul.subList li.firstItem'));
  $('p').after($('#list'));
  
})