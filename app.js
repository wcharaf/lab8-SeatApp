$(document).ready(function(){

var dataobject = {};
  $(".col-md-3").click(function(){
    // function popup() {
    //     $("#contactdiv").css("display", "block");
    //     }
        $("#cancel").click(function() {
          $(this).parent().parent().hide();
        });
        $("#submit").click(function() {
          var name = $("#name").val();
          var email = $("#email").val();
          var contact = $("#contactno").val();
          if (name == "" || email == "" || contactno == ""){
            alert("Please Fill All Fields");
          }else {
            if (validateEmail(email)) {
              $("#contactdiv").css("display", "none");
            }else {
              alert('Invalid Email Address');
            };

            function validateEmail(email) {
              var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
              if (filter.test(email)) {
                return true;
              }else {
                return false;
              }
            }
          }
    });
      // alert("The paragraph was clicked.");
      // $("#contactdiv").css("display", "block");
    // });
