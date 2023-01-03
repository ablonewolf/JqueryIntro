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
  /* // removing elements using jQuery
  $('li').remove();
  $("form").children().not("input[type='email']").remove();

  // detaching the list item and attaching it again to the DOM
  let detachedItem = $("li").detach();
  $("#content").append(detachedItem);

  // empty everything inside the paragraph
  $("p:first").empty();

  // Empty everything inside the boxes, without removing them.
  $('.red-box, .green-box, .blue-box').empty(); */
  var specialLink = $('#special-link');
  console.log(specialLink.attr('href'));
  specialLink.attr('href', 'http://google.com');
  var maleButton = $('#male');
  var femaleButton = $('#female');
  console.log(maleButton.prop('checked'));
  console.log(femaleButton.prop('checked'));
});
/* $(function () {
  let firstList = $("ul#list li ul li");
  $.ajax({
    type: 'GET',
    dataType: 'JSON',
    url: "https://reqres.in/api/users",
    success: function (response) {
      if (response != null) {
        console.log(response.data);
        // console.log(response.data[0]);
        for (let i in response.data) {
            let email = response.data[i].email;
            console.log(response.data[i]);
            console.log(email);
            // var listElement = $("<li>",{"email:":response.data[i].email},"</li>");
            // $("ul li ul li").append($("li").text(response.data[i].email));
          // $("li").text(email).appendTo($("ul li ul li"));
          let temp = `<li>email:${email}</li>`;
          $("ul ul").append(temp);
            }
        }
    },
    error: function () {
        console.log("error in the api.");
    }
});
}); */
$(function () {
  /*  
  //  slideshow of image gallery
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
  }, 2000); */
});

$(function () {
  // changing the default font size for paragraph
  $('p').css('font-size', '19px');

  var paragraphProperties = $('p').css(['font-size', 'line-height', 'color']);
  console.log(paragraphProperties);
  var redBox = $('.red-box');
  redBox.css('user-select', () => 'none');
});

$(function () {
  // adding and removing css classes to elements using jquery
  $('a').addClass('fancy-link');
  // $('p:first').addClass('large emphasize');

  $('li li').addClass(function (index) {
    $(this).addClass('item-' + index);
  });

  /* $('div').addClass(function (index, currentClass) {
    if (currentClass === 'dummy') return 'red-box';
  });

  // changing the css class to green-box
  $('.dummy').removeClass('dummy').addClass('green-box'); */
});

$(function () {
  // changing data of an element using jquery
  let gallery = $('.gallery');
  let images = [
    'images/laptop-mobile_small.jpg',
    'images/laptop-on-table_small.jpg',
    'images/people-office-group-team_small.jpg'
  ];
  gallery.data('availableImages', images);
  console.log(gallery.data('availableImages'));
  gallery.data('name', 'Awesome Gallery');
  console.log(gallery.data());
  gallery.removeData('name');
  console.log(gallery.data());
});

$(function () {
  // retrieving and changing the content of html
  let firstPar = $('p:first');
  console.log(firstPar.text());
  console.log(firstPar.html());
  firstPar.html(
    firstPar.html() +
      '<br>' +
      '<strong>Hello World. This is Arka.</strong> I am editing this webpage to practice Jquery.'
  );
});

$(function () {
  // some onclick event handlers
  $('#btn-click').click(
    {
      user: 'Arka',
      email: 'arkabhuiyancsedu@gmail.com'
    },
    function (event) {
      greetUser(event.data);
    }
  );
  const greetUser = (userData) => {
    username = userData.user || 'Anonymous';
    email = userData.email || 'unknown@email.com';

    alert('Welcome back ' + username + ' ' + 'with email id : ' + email);
  };
  $('.red-box').click(function () {
    $(this).fadeOut(500);
    $(this).fadeIn(1000);
  });

  // some hover handlers
  /* $('#btn-hover').hover(function () {
    alert('Hover button was hovered.');
  }); */

  /* $('.green-box').hover(function () {
    box = $(this);
    // message = box.text();
    box.text('It is hovered.');
    setTimeout('box.text("Green");', 500);
  }); */
  let greenBox = $('.green-box');
  let text = $('.green-box').text();
  greenBox.hover(
    (event) => {
      $(event.currentTarget).text('hovered');
    },
    (event) => {
      $(event.currentTarget).text(text);
    }
  );

  // mouse enter and mouse leave handlers
  let blueBox = $('.blue-box');
  blueBox.mouseenter(function () {
    $(this).stop().fadeTo(1000, 0.5);
  });
  blueBox.mouseleave(function () {
    $(this).stop().fadeTo(1000, 1);
  });

  // hover(function1, function2)

  let redBox = $('.red-box');
  let redText = $('.red-box').text();
  redBox.hover(
    function () {
      $(this).text('Hovered');
    },
    function () {
      $(this).text(redText);
    }
  );
});
$(function () {
  // showing next image on click.
  /* let images = [
    'images/laptop-mobile_small.jpg',
    'images/laptop-on-table_small.jpg',
    'images/people-office-group-team_small.jpg'
  ];
  let index = 0;
  let galleryImage = $('.gallery').find('img');
  const switchToNextImage = function () {
    index = (index + 1) % images.length;
    $(this).fadeOut(function () {
      $(this).attr('src', images[index]).fadeIn();
    });
  };
  galleryImage.on('click', switchToNextImage); */
  /*  $('.gallery')
    .find('img')
    .on('click', function () {
      index = (index + 1) % images.length;
      $(this).fadeOut(function () {
        $(this).attr('src', images[index]).fadeIn();
      });
    }); */
});

$(function () {
  let prevColor = $('li').css('color');
  let resetColor = function () {
    $(this).css('color', prevColor);
  };
  // delegating events
  let changeColor = function () {
    $(this).css('color', '#777');
  };
  $('body').on('mouseenter', 'li', changeColor);
  $('body').on('mouseleave', 'li', resetColor);
});

$(function () {
  let galleryItems = $('.gallery').find('img');
  galleryItems.css('width', '33%').css('opacity', '.7');

  galleryItems.mouseenter(function () {
    $(this).stop().fadeTo(500, 1);
  });

  galleryItems.mouseleave(function () {
    $(this).stop().fadeTo(500, 0.7);
  });

  galleryItems.click(function () {
    let source = $(this).attr('src');
    let caption = $(this).attr('alt');
    let image = $('<img>').attr('src', source).css('width', '100%');
    let heading = $('<h2></h2>').text(caption);

    $('.lightbox').empty().append(heading).append(image).fadeIn(1500);
  });

  $('.lightbox').click(function () {
    $(this).stop().fadeOut();
  });
});
