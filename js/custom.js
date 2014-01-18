
    $(document).ready(function(){
      $('.carousel').carousel({  
        interval: 7000 // in milliseconds  
      });
    });


// handles the carousel thumbnails

    $('[id^=carousel-selector-]').click( function(){
        var id_selector = $(this).attr("id");
        var id = id_selector.substr(id_selector.length -1);
        id = parseInt(id);
        $('#slideshow').carousel(id);
        $('[id^=carousel-selector-]').removeClass('selected');
        $(this).addClass('selected');
      });


      // when the carousel slides, auto update
      $('#slideshow').bind('slid.bs.carousel', function (e) {
        var id = $('.item.active').data('slide-number');
        id = parseInt(id);
        $('[id^=carousel-selector-]').removeClass('selected');
        $('[id^=carousel-selector-'+id+']').addClass('selected');
      });

      


// Handle follow-up form
function updateAfterEmail()
{
  alert("Valid Email Submitted");
  /*
var emailForm = document.getElementById("mce-EMAIL");
var x=emailForm.value;
var atpos=x.indexOf("@");
var dotpos=x.lastIndexOf(".");
var liEmail = document.getElementById("email-input");
liEmail.style.color = "green";
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  {
  liEmail.style.color = "red";
  return false;
  }
  */
}




// Handle post-form submit views