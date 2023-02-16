
// Site Gallery Script

$(document).ready(function(){
  $('.vexteriorsgallery > div.vexteriorsbg').each(function(){
    $(this).wrapAll('<a href="" data-fancybox="vexteriorsgallery"></a>');
  });
  $('.vexteriorsgallery a').each(function(){
    var link = $(this).children('.vexteriorsbg').css('background-image');
    console.log(link);
    link = link.replace(/(url\(|\)|")/g,'');
    $(this).attr('href', link);
  });
  $("[data-fancybox]").fancybox({
    loop: true,
    buttons: [
          "zoom",
          "share",
          "slideShow",
          "fullScreen",
          // "download",
          "thumbs",
          "close"
      ]   
  });
});


$(document).ready(function(){
  $('.vinteriorsgallery > div.vinteriorsbg').each(function(){
    $(this).wrapAll('<a href="" data-fancybox="vinteriorsgallery"></a>');
  });
  $('.vinteriorsgallery a').each(function(){
    var link = $(this).children('.vinteriorsbg').css('background-image');
    console.log(link);
    link = link.replace(/(url\(|\)|")/g,'');
    $(this).attr('href', link);
  });
  $("[data-fancybox]").fancybox({
    loop: true,
    buttons: [
          "zoom",
          "share",
          "slideShow",
          "fullScreen",
          // "download",
          "thumbs",
          "close"
      ]   
  });
});


$(document).ready(function(){
  $('.vamenitiesgallery > div.vamenitiesbg').each(function(){
    $(this).wrapAll('<a href="" data-fancybox="vamenitiesgallery"></a>');
  });
  $('.vamenitiesgallery a').each(function(){
    var link = $(this).children('.vamenitiesbg').css('background-image');
    console.log(link);
    link = link.replace(/(url\(|\)|")/g,'');
    $(this).attr('href', link);
  });
  $("[data-fancybox]").fancybox({
    loop: true,
    buttons: [
          "zoom",
          "share",
          "slideShow",
          "fullScreen",
          // "download",
          "thumbs",
          "close"
      ]   
  });
});



$(document).ready(function(){
  $('.vsiteplangallery > div.vsiteplanbg').each(function(){
    $(this).wrapAll('<a href="" data-fancybox="vsiteplangallery"></a>');
  });
  $('.vsiteplangallery a').each(function(){
    var link = $(this).children('.vsiteplanbg').css('background-image');
    console.log(link);
    link = link.replace(/(url\(|\)|")/g,'');
    $(this).attr('href', link);
  });
  $("[data-fancybox]").fancybox({
    loop: true,
    buttons: [
          "zoom",
          "share",
          "slideShow",
          "fullScreen",
          // "download",
          "thumbs",
          "close"
      ]   
  });
});


$(document).ready(function(){
  $('.vfloorplangallery > div.vfloorplanbg').each(function(){
    $(this).wrapAll('<a href="" data-fancybox="vfloorplangallery"></a>');
  });
  $('.vfloorplangallery a').each(function(){
    var link = $(this).children('.vfloorplanbg').css('background-image');
    console.log(link);
    link = link.replace(/(url\(|\)|")/g,'');
    $(this).attr('href', link);
  });
  $("[data-fancybox]").fancybox({
    loop: true,
    buttons: [
          "zoom",
          "share",
          "slideShow",
          "fullScreen",
          // "download",
          "thumbs",
          "close"
      ]   
  });
});


$(document).ready(function(){
  $('.vunitplangallery > div.vunitplanbg').each(function(){
    $(this).wrapAll('<a href="" data-fancybox="vunitplangallery"></a>');
  });
  $('.vunitplangallery a').each(function(){
    var link = $(this).children('.vunitplanbg').css('background-image');
    console.log(link);
    link = link.replace(/(url\(|\)|")/g,'');
    $(this).attr('href', link);
  });
  $("[data-fancybox]").fancybox({
    loop: true,
    buttons: [
          "zoom",
          "share",
          "slideShow",
          "fullScreen",
          // "download",
          "thumbs",
          "close"
      ]   
  });
});

$(document).ready(function(){
  $('.erexteriorsgallery > div.erexteriorsbg').each(function(){
    $(this).wrapAll('<a href="" data-fancybox="erexteriorsgallery"></a>');
  });
  $('.erexteriorsgallery a').each(function(){
    var link = $(this).children('.erexteriorsbg').css('background-image');
    console.log(link);
    link = link.replace(/(url\(|\)|")/g,'');
    $(this).attr('href', link);
  });
  $("[data-fancybox]").fancybox({
    loop: true,
    buttons: [
          "zoom",
          "share",
          "slideShow",
          "fullScreen",
          // "download",
          "thumbs",
          "close"
      ]   
  });
});


$(document).ready(function(){
  $('.erinteriorsgallery > div.erinteriorsbg').each(function(){
    $(this).wrapAll('<a href="" data-fancybox="erinteriorsgallery"></a>');
  });
  $('.erinteriorsgallery a').each(function(){
    var link = $(this).children('.erinteriorsbg').css('background-image');
    console.log(link);
    link = link.replace(/(url\(|\)|")/g,'');
    $(this).attr('href', link);
  });
  $("[data-fancybox]").fancybox({
    loop: true,
    buttons: [
          "zoom",
          "share",
          "slideShow",
          "fullScreen",
          // "download",
          "thumbs",
          "close"
      ]   
  });
});


$(document).ready(function(){
  $('.eramenitiesgallery > div.eramenitiesbg').each(function(){
    $(this).wrapAll('<a href="" data-fancybox="eramenitiesgallery"></a>');
  });
  $('.eramenitiesgallery a').each(function(){
    var link = $(this).children('.eramenitiesbg').css('background-image');
    console.log(link);
    link = link.replace(/(url\(|\)|")/g,'');
    $(this).attr('href', link);
  });
  $("[data-fancybox]").fancybox({
    loop: true,
    buttons: [
          "zoom",
          "share",
          "slideShow",
          "fullScreen",
          // "download",
          "thumbs",
          "close"
      ]   
  });
});

$(document).ready(function(){
  $('.ersiteplangallery > div.ersiteplanbg').each(function(){
    $(this).wrapAll('<a href="" data-fancybox="ersiteplangallery"></a>');
  });
  $('.ersiteplangallery a').each(function(){
    var link = $(this).children('.ersiteplanbg').css('background-image');
    console.log(link);
    link = link.replace(/(url\(|\)|")/g,'');
    $(this).attr('href', link);
  });
  $("[data-fancybox]").fancybox({
    loop: true,
    buttons: [
          "zoom",
          "share",
          "slideShow",
          "fullScreen",
          // "download",
          "thumbs",
          "close"
      ]   
  });
});


$(document).ready(function(){
  $('.erunitplangallery > div.erunitplanbg').each(function(){
    $(this).wrapAll('<a href="" data-fancybox="erunitplangallery"></a>');
  });
  $('.erunitplangallery a').each(function(){
    var link = $(this).children('.erunitplanbg').css('background-image');
    console.log(link);
    link = link.replace(/(url\(|\)|")/g,'');
    $(this).attr('href', link);
  });
  $("[data-fancybox]").fancybox({
    loop: true,
    buttons: [
          "zoom",
          "share",
          "slideShow",
          "fullScreen",
          // "download",
          "thumbs",
          "close"
      ]   
  });
});
