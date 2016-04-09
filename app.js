$(document).ready(function(){ // JavaScript-y things here

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