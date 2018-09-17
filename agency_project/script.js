$(document).ready(function () {

  $('#menu-btn').click(changeNav);


  function changeNav() {
    $('#links').toggle(780);
    $('#menu-btn').toggleClass('turn')
  }

})
