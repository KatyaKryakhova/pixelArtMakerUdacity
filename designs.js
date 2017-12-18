 // Select size input
 var gridHeightInput = $('#input_height');
 var gridWidthInput = $('#input_width');
 var submitButton = $('input[type=submit]');
 var table = $('#pixel_canvas');
 var colorInput = $('#colorPicker');
 var color = colorInput.val();


 colorInput.change(function() {
     color = colorInput.val();
 });

 submitButton.click(function(e) {
     e.preventDefault();
     var height = gridHeightInput.val();
     var width = gridWidthInput.val();
     makeGrid(width, height);
 });

 table.on('click', 'td', function(e) {
     e.preventDefault();
     $(this).css('background-color', color);
 })

 function makeGrid(width, height) {
    var tbody = $('<tbody></tbody>');
     for (var rows = 1; rows <= height; rows++) {
         var row = $('<tr></tr>');
         for (var columns = 1; columns <= width; columns++) {
             $('<td></td>').appendTo(row);
         }
         tbody.append(row);
     }
     table.empty(); 
     table.append(tbody);
 }