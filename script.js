$(function() {

  $('#submitButton').on('click', function(event) {

    //prevent default page from refreshing
    event.preventDefault();

    //get width and height by using let or const for variables
    let rowHeight = $("#inputHeight").val();
    let rowWidth = $("#inputWidth").val();

    //to clear previous grid
    $('#pixelCanvas').empty();

    //call the makeGrid function with parameters
    makeGrid(rowHeight, rowWidth);

  })


  //define makeGrid function
 function makeGrid(rowHeight, rowWidth) {

   //nested loop to build grid. if r is less than row height then add a table row "tr"
    for (var r = 1; r<= rowHeight; r++) {

       //use jquery .append to add tr element
       $('#pixelCanvas').append('<tr></tr>');

   //within each tr add a cell ie table element which is te while c is less than row width
    for (var c = 1; c<= rowWidth; c++) {

  //append tr element since they are appended not prepended
       $('tr').last().append('<td></td>');
    }
  }
}

  //create applyColor function to apply indicated color when mouseover
  $('#pixelCanvas').on('mouseover', 'td', function applyColor() {

    let color = $('#colorPicker').val();

    //td element using css to change background color
    $(this).css('background-color', color);

  })

});
