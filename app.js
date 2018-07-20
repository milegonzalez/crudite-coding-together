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
    let titleValue = $('.input-field-title').val();
    let contentValue = $('.input-field-body').val();

    localStorage.setItem('titleValue', titleValue);
    localStorage.setItem('contentValue', contentValue);
  });


  $('.get-btn').on('click', function(event){
    // console.log(localStorage.getItem('hrext'));

    let titleValue = localStorage.getItem('titleValue');
    let contentValue = localStorage.getItem('contentValue');

    $('.debug').html(`<p>${titleValue} ${contentValue}</p>`);
  });

  $('.delete-btn').on('click', function(event){
    console.log(localStorage.removeItem('hrext'));
  });


});
