$(document).ready(function(){

  $(".btn").click(function(){
    $(this).toggleClass("btn-on");
  });

  $(".switch").click(function(){
    $(this).toggleClass("switch-on");
    $(this).find(".slider").toggleClass("slider-on")
  });

  $(".maru").click(function(){
    $(this).find(".circle").toggleClass("circle-on")
  });

});
