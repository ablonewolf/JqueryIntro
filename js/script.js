$(function () {
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
});
// traversing dom elements
$(function () {
  // jquery traversals of elements
  // $('#list').find('li').css('background-color', 'rgba(180,180,30,0.6)');
  // $('#list').children('li').css('background-color', 'rgba(180,180,30,0.8)');
  // $('#list').parent().css('background-color', 'rgba(180,180,30,0.8)');
  // $('#list').siblings(':header').css('background-color', 'rgba(180,180,30)');
  // $('#list').prev().css('background-color', 'rgba(180,180,30)');
  // $(':header').next().css('background-color', 'rgba(180,180,30,0.8)');
  $('form')
    .children('input:text')
    .css('background-color', 'rgba(180,180,30,0.8');

  // Methods for filtering input
  // find all the even list items
  // $('#list')
  //   .find('li')
  //   .filter(':even')
  //   .css('background-color', 'rgba(180,180,30,0.8)');
  // find all the even list items which are direct children
  // $('#list')
  //   .children('li')
  //   .filter(':even')
  //   .css('background-color', 'rgba(180,180,30,0.8)');
  // writing a custom function to filter even numbered list items
  // $('li')
  //   .filter((index) => index % 2 === 0)
  //   .css('background-color', 'rgba(180,180,30,0.6');
  // A built-in function to filter even numbered list items
  // $('li').filter(':even').css('background-color', 'rgba(180,180,30,0.6');
  // A built-in function to filter odd numbered list items
  // $('li').filter(':odd').css('background-color', 'rgba(30,30,30,0.6');
  // A built-in function to filter the last item in the list
  // $('li').last().css('background-color', 'rgba(180,180,30,0.6');
  // A built-in function to filter the number 4th list item in the list
  $('li').eq(3).css('background-color', 'rgba(180,180,30,0.6');
  // Coloring the list items except the first one
  // $('li').not(':first').css('background-color', 'rgba(180,180,30,0.6');
});

// Adding new items to the DOM using JQuery
$(function () {
  $('ul ul:first').append('<li>I am the sub item.</li>');
  $('<li>I am the last item</li>').appendTo($('ul ul:first'));
  $('ul ul').prepend('<li class="firstItem">I am gonna be the first item</li>');
  $('<li class="secondItem">I am gonna be the second item</li>').appendTo(
    $('ul li ul li.firstItem')
  );
  // $('p').after($('#list'));
  $('<h2>Hi. I am Arka Bhuiyan.</h2>').prependTo('#content');
});

$(function () {
  // $('li').replaceWith($('<li>I am the replaced item</li>'));
  var firstList = $('li:first');
  // $('p').replaceWith(firstList);
  // replacing the red box and the green box with the blue box
  var blueBox = $('<div class="blue-box">More Blue Around here</div>');
  // $('.red-box').replaceWith(blueBox);
  // $('.green-box').replaceWith(blueBox);
  // bluebox replacing all the red and green boxes
  // $(blueBox).replaceAll(".red-box, .green-box");
});

$(function () {
  // removing elements using jQuery
  // $('li').remove();
  // $("form").children().not("input[type='email']").remove();

  // detaching the list item and attaching it again to the DOM
  // let detachedItem = $("li").detach();
  // $("#content").append(detachedItem);

  // empty everything inside the paragraph
  // $("p:first").empty();

  // Empty everything inside the boxes, without removing them.
  // $('.red-box, .green-box, .blue-box').empty();
  var specialLink = $('#special-link');
  console.log(specialLink.attr('href'));
  specialLink.attr('href', 'http://google.com');
  var maleButton = $('#male');
  var femaleButton = $('#female');
  console.log(maleButton.prop('checked'));
  console.log(femaleButton.prop('checked'));
});
// $(function () {
//   let firstList = $("ul#list li ul li");
//   $.ajax({
//     type: 'GET',
//     dataType: 'JSON',
//     url: "https://reqres.in/api/users",
//     success: function (response) {
//       if (response != null) {
//         console.log(response.data);
//         // console.log(response.data[0]);
//         for (let i in response.data) {
//             let email = response.data[i].email;
//             console.log(response.data[i]);
//             console.log(email);
//             // var listElement = $("<li>",{"email:":response.data[i].email},"</li>");
//             // $("ul li ul li").append($("li").text(response.data[i].email));
//           // $("li").text(email).appendTo($("ul li ul li"));
//           let temp = `<li>email:${email}</li>`;
//           $("ul ul").append(temp);
//             }
//         }
//     },
//     error: function () {
//         console.log("error in the api.");
//     }
// });
// });
$(function () {
  var gallaryImage = $('.gallery').find('img').first();
  // console.log(gallaryImage);
  images = [
    'images/laptop-mobile_small.jpg',
    'images/laptop-on-table_small.jpg',
    'images/people-office-group-team_small.jpg'
  ];

  var index = 0;
  setInterval(function () {
    index = (index + 1) % images.length;

    gallaryImage.fadeOut(function () {
      $(this).attr('src', images[index]);
      $(this).fadeIn();
    });
    // console.log(gallaryImage.attr('src'));
  }, 2000);
});

$(function () {
  // changing the default font size for paragraph
  $('p').css('font-size', '19px');

  var paragraphProperties = $('p').css(['font-size', 'line-height', 'color']);
  console.log(paragraphProperties);
  var redBox = $('.red-box');
  redBox.css('user-select', () => 'none');
});
