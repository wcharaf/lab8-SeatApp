$(document).ready(function(){

  // $(".col-md-3").click(function(){
  //     alert("The paragraph was clicked.");
  //   });
$(".col-md-3").click(function(){
      $(this).css("background-color", "black");
      $(this).css("color", "white");
    });

});
//using the $(<>).data("{object:object, object: object}")
//also use getData to bring data from the form and displa as an object with key value pairs
//in a var= {}
//which we can applend to the selected seats
//that takes care of the bonus
//http://tutorialzine.com/2010/11/jquery-data-method/


var reservationObj = {};


    // function popup() {
    //     $("#contactdiv").css("display", "block");
    //     }
        // $("#cancel").on("click",function() {
        //   $(this).parent().parent().hide();
        // });
        $("#submit").on("click",function() {
          var name = $("#name").value;
          var email = $("#email").value;
          var contact = $("#contactno").value;
          console.log(name+email+contact);
          // if (name === "" || email === "" || contactno === ""){
          //   alert("Please Fill All Fields");
          // }else {
          //   if (validateEmail(email)) {
          //     $("#contactdiv").css("display", "none");
          //   }else {
          //     alert('Invalid Email Address');
          //   };
          //
          //   function validateEmail(email) {
          //     var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
          //     if (filter.test(email)) {
          //       return true;
          //     }else {
          //       return false;
          //     }
          //   }
          // }
        });

        
     
    });

      // alert("The paragraph was clicked.");
      // $("#contactdiv").css("display", "block");
    // });

