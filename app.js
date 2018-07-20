$(document).ready(function(){
  //attach an event listener to the buttons
  //create a function stuf for read/write/delet/
      // research local storage

//remember not to push node files.

//jquery selection template.
  // $('').on('click' , function(){
  //
  // });

  $('.store-btn').on('click', function(event){
    // event.preventDefault();
    // event.stopPropagation();
    let author = $('.input-field-author').val();
    let message = $('.input-field-message').val();

    localStorage.setItem('author', author);
    localStorage.setItem('message', message);
  });


    $('.set-reminder-btn').on('click', function(event){
      let author = $('.input-field-author').val();
      let message = $('.input-field-message').val();

      alert(`${author} ${message}`);
    });


  $('.get-btn').on('click', function(event){
    let author = localStorage.getItem('author');
    let message = localStorage.getItem('message');

    $('.debug').html(`<p>${author} ${message}</p>`);
  });


  $('.delete-btn').on('click', function(event){
    // console.log(localStorage.removeItem('hrext'));
    localStorage.removeItem('author');
    localStorage.removeItem('message');

    $('.debug').html(`<p>Items deleted</p>`);
  });




});
