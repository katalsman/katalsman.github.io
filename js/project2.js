$(document).ready(function(){

  //make action on click
  $('.dropbtn').click(function(){

    //stop browser from default action and pass our own action
    event.preventDefault();

    //make dropddown menu slide out from navbar
    $('#myDropdown').slideToggle();

    //make dropdown button keep active state after being clicked
    $(this).toggleClass('active');
  })

});
