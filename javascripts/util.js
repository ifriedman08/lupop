$.mobile.loading( "hide" );

$("div.main-nav-link > div").on("tap mousedown", function () {
  console.log("tap click");
  console.log('mousedown');
  $(this).css({
    'background-color' : 'black',
    'color'  : 'white'
  })
})

$("div.main-nav-link > div").on("mouseup", function () {
  console.log('mouseup');
  $(this).css({
    'background-color' : 'white',
    'color'  : 'black'
  })
});

var clearBody = function () {
  $("div#home").hide();
  $("div#artist").hide();
  $("div#hair").hide();
  $("div#contact").hide();
}

$("div.hair").mouseup(function (el) {
  clearBody();
  $('div#hair').show();
  $('body').css({
    "background-color":"black",
    "color":"white"
  })
});

$("div.art").mouseup(function (el) {
  clearBody();
  $('div#artist').show();
  $('body').css({
    "background-color":"black",
    "color":"white"
  })
});

$("div.contact").mouseup(function (el) {
  clearBody();
  $('div#contact').show();
  $('body').css({
    "background-color":"black",
    "color":"white"
  })
});

$("a#back-to-main").click(function () {
  clearBody();
  $('div#home').show();
  $('body').css({
    "background-color":"white",
    "color":"black"
  })
})
