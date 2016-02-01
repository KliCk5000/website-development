var gameView = document.getElementById("gameViewPort");

// Variables
var maxColumns = 12;
var maxRows = 7;

// Make a table like before
var column; var row; var newTile;
for(column = 1, row = 1; column <= maxColumns, row <= maxRows;) {
    var currentGrid = null;
    
    newTile = '<div id="tile_'+ column + row +'" class="tileClass">O</div>';
    
    if (column > maxColumns) {
        currentGrid = document.getElementById("gameViewPort").innerHTML;
        document.getElementById("gameViewPort").innerHTML = currentGrid + "<div style='clear:both;'></div>";
    
        row++;
        column = 1; 
    }
    else {
        currentGrid = document.getElementById("gameViewPort").innerHTML;
        document.getElementById("gameViewPort").innerHTML = currentGrid + newTile;
        
        column++; 
    }
}