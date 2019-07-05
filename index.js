// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems, {});
//   });

$(document).ready(function(){
  $('.sidenav').sidenav();
});

  
$(document).ready(function(){
  $(window).scroll(function(){
  if($(window).scrollTop()>500){
    $('nav').addClass('color');
  }else{
    $('nav').removeClass('color');
  }
})
})