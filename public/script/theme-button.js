$("#dark-theme").on("click", function(){
  $("body").addClass("dark-theme");
  $(".form-control").css({
    "border-color": "#f8f9fa", 
    "background-color": "#212529", 
    "color": "#f8f9fa"
  });
  $(".current-theme").attr("href", "#moon-stars-fill");
  $("#light-theme").removeClass("active");
  $("#dark-theme").addClass("active");
  $(".dark-check").removeClass("d-none");
  $(".light-check").addClass("d-none");
});

$("#light-theme").on("click", function(){
  $("body").removeClass("dark-theme");
  $(".form-control").css({
    "border-color": "#dee2e6", 
    "background-color": "#f8f9fa", 
    "color": "#212529"
  });
  $(".current-theme").attr("href", "#sun-fill");
  $("#dark-theme").removeClass("active");
  $("#light-theme").addClass("active");
  $(".light-check").removeClass("d-none");
  $(".dark-check").addClass("d-none");
});

