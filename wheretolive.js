//logo animations

$('.brum').on('mouseover', function() {
      $(this).toggleClass('brum2');
  });

$('.in').on('mouseover', function() {
      $(this).toggleClass('in2');
  });

  $('.bow').on('mouseover', function() {
    $('.bow').animate({left: '77px'},{duration:9000, queue: false});
    $('.cabin').animate({left: '100px'},{duration: 9000, queue:false});
  });

//dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//this shows the pic description when you click on the pic name
  $('.bhampic').on('click', function() {
      $(this).toggleClass('show-description');
  });
