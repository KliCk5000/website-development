///////////////////////////////////////////////////////////////////////////////
//    _____                                 _                ___ _ _       
//   (_____)                               (_)      _       / __|_) |      
//      _  ____ _   _ ____  ___  ____  ____ _ ____ | |_    | |__ _| | ____ 
//     | |/ _  | | | / _  |/___)/ ___)/ ___) |  _ \|  _)   |  __) | |/ _  )
//  ___| ( ( | |\ V ( ( | |___ ( (___| |   | | | | | |__   | |  | | ( (/ / 
// (____/ \_||_| \_/ \_||_(___/ \____)_|   |_| ||_/ \___)  |_|  |_|_|\____)
//                                           |_|                           
///////////////////////////////////////////////////////////////////////////////

window.selectedTile = null; //Make sure nothing is selected to start
var tableView = document.getElementById("mainViewPort");


//////////////////////////////////////////////////////////
// EVENT LISTENER: onCliCkScript
//////////////////////////////////////////////////////////
tableView.addEventListener("click", onClickScript, false);
// Target ID would be:
// <div class="oddTile tileSize" id="tile_12">X</div>
function onClickScript(event) {
    // Check for document action CLICK and determine if the element is part of the tileSize class
    // If it is part of the tileSize class ALERT() the coordinates x,
    var tileID = event.target.id;
    // tileID right now should say something like "tile_25"
    
    // something happens here
    var tileClassCheck = hasClassName("tileClass",tileID);

    if (window.selectedTile == tileID && tileClassCheck == true) {
        // There is already a Menu Open since we know that it's the same tileID
        // CLOSE THE MENU
        
        window.selectedTile = null;
        
        removeTileMenu(event);
        
    } else if(tileClassCheck == true){
        // We can attempt to remove any div here because there's a div somewhere else
        
        // First let's remove any existing tile menu
        removeTileMenu(event);
        
        // Now let's tell the global variable selectedTile that it is now tileID
        window.selectedTile = tileID;
        
        // Now we just need to append it to the selected tile
        var cacheContent = event.target.innerHTML;
        var newMenu = "<div class='tileMenu'><div>Coordinate: "+tileID+"</div><div>Menu Option1</div></div>";
        event.target.innerHTML =  cacheContent + newMenu;
        
        // Done
    }
}
////////////////////////////////////
// End Function OnClickScript(event)
////////////////////////////////////

// First set defines the variables up until the first semicolon
// Then we see if both X and Y are less than 11, if it's greater than it will break the loop
// don't forget the semicolon at the end
var x; var y; var gridPattern; var newTile;
for(x = 1, y = 1, gridPattern = false; x < 12, y < 11;){
    var currentTile = null;
    // Assign IDs to each tile
    //newTile.element.id = "tile_" + x + y;
    
    // This piece here alternates between black and white tiles
    
    // START
    if(gridPattern == false){
        newTile = '<div id="tile_'+x+y+'" class="tileClass oddTile tileSize">X</div>';
        gridPattern = true;
    } else {
        newTile = '<div id="tile_'+x+y+'" class="tileClass evenTile tileSize">O</div>';
        gridPattern = false;
    }
    // END ALTERNATING TILES
    
    //
    if(x == 11 && y != 10){
        // ADD A NEW ROW (Because Y is not == 10)
        
        // APPENDS
        currentTile = document.getElementById("mainViewPort").innerHTML;
        // "Clear: Both" makes it so that it pushes the next div element to a new line.
        document.getElementById("mainViewPort").innerHTML = currentTile + "<div style='clear:both;'></div>";
        x = 1; y++; // We now reset x to 1 because we are on a new Row. We also add +1 to y because it's a new row.
    } else if(x == 11 && y == 10){ //Are you at the end of the grid?
        x++; y++; //makes X and Y 11 so that the for loop ends
       currentTile = document.getElementById("mainViewPort").innerHTML;
        // "Clear: Both" makes it so that it pushes the next div element to a new line.
        document.getElementById("mainViewPort").innerHTML = currentTile + "<div style='clear:both;'></div>";
    } else {
        // Append a new Tile on the X-Column until it reaches the end.
        currentTile = document.getElementById("mainViewPort").innerHTML;
        document.getElementById("mainViewPort").innerHTML = currentTile + newTile;
        x++;
    }
} 

function removeTileMenu(event){
    [].forEach.call(document.querySelectorAll('.tileMenu'),function(event){
        event.parentNode.removeChild(event);
    });
}

function hasClassName(classname,id) {
     return  String ( ( document.getElementById(id)||{} ) .className )
             .split(/\s/)
             .indexOf(classname) >= 0;
             
}


/*
    The following uses Regex to fetch the id # from the id that contains
    mixed numbers and letters ie: tile_58
    
    
    tileID = tileID.match(/\d/g); // This is called a Regex
    tileID = tileID.join("");
    
    We don't really need this right now however
    because we already know that we're in the cell
    from the event
*/