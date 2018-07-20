$(document).ready(function(){
  //attach an event listener to the buttons
  //create a function stuf for read/write/delet/
      // research local storage

//remember not to push node files.

//jquere selection template.
  // $('').on('click' , function(){
  //
  // });

  $('.store-btn').on('click', function(event){
    // event.preventDefault();
    // event.stopPropagation();
    localStorage.setItem('hrext', "three three three")
  });


  $('.get-btn').on('click', function(event){
    console.log(localStorage.getItem('hrext'));
  });

  $('.delete-btn').on('click', function(event){
    console.log(localStorage.removeItem('hrext'));
  });


});
