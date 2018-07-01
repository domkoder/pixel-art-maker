
// Select size input and When size is submitted by the user, call makeGrid()
$( "#sizePicker" ).submit(function( event ) {
    var hght = $('#inputHeight').val();
    var wght = $('#inputWeight').val();
    makeGrid(hght,wght);
    event.preventDefault();
  });

function makeGrid(row, col) {
// Your code goes here!
    var $grid = $('#pixelCanvas').empty();
    for(var h=0; h<row; h++){  
        var $tr = $('<tr class="tr"></tr>').appendTo($grid);
        for(var w=0; w<col; w++){
            $tr.append('<td class="td"></td>');
        }
    }
    
    //Selected color input and toggle it on click
    $('td').click(function(){
        var color = $('#colorPicker').val();
        this.style.backgroundColor = this.style.backgroundColor == color ? 'white' : color;
    });
}


