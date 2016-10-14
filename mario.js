

button = document.getElementById("draw-button");
button.onclick = function() {

    heightStr = document.getElementById("height").value

    height = parseInt(heightStr);

    drawPyramid(height);
}



 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
 function drawPyramid(height) {

     document.getElementById("pyramid").innerHTML = "";

     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += "\u00A0";
             // above got rid of periods and replaced with spaces
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += "#";
         }

        textElem = document.createTextNode(rowStr);

        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        document.getElementById("pyramid").appendChild(rowElem);
    }
}
