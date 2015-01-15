
var container = document.getElementById('container');
var boxes = document.getElementsByClassName("box");
var colors = document.getElementsByClassName("color");
var color = "";
var colorRow = document.getElementById('color-picker');
var colorArray = ["IndianRed","LightCoral","Salmon","DarkSalmon","LightSalmon","Crimson","Red","FireBrick","DarkRed","Pink","LightPink","HotPink","DeepPink","MediumVioletRed","PaleVioletRed","LightSalmon","Coral","Tomato","OrangeRed","DarkOrange","Orange","Gold","Yellow","LightYellow",
              "LemonChiffon","LightGoldenrodYellow","PapayaWhip","Moccasin","PeachPuff","PaleGoldenrod","Khaki","DarkKhaki","Lavender","Thistle","Plum","Violet","Orchid","Fuchsia","Magenta","MediumOrchid","MediumPurple", "BlueViolet","DarkViolet","DarkOrchid","DarkMagenta",
              "Purple","Indigo","SlateBlue" ,"DarkSlateBlue","MediumSlateBlue","GreenYellow","Chartreuse","LawnGreen","Lime","LimeGreen","PaleGreen","LightGreen","MediumSpringGreen","SpringGreen","MediumSeaGreen","SeaGreen","ForestGreen","Green","DarkGreen","YellowGreen","OliveDrab",
              "Olive","DarkOliveGreen","MediumAquamarine","DarkSeaGreen","LightSeaGreen","DarkCyan","Teal","Aqua","Cyan","LightCyan","PaleTurquoise","Aquamarine","Turquoise","MediumTurquoise","DarkTurquoise","CadetBlue","SteelBlue","LightSteelBlue","PowderBlue","LightBlue","SkyBlue",
              "LightSkyBlue","DeepSkyBlue","DodgerBlue","CornflowerBlue" ,"MediumSlateBlue","RoyalBlue","Blue","MediumBlue","DarkBlue" ,"Navy","MidnightBlue","Cornsilk","BlanchedAlmond","Bisque","NavajoWhite","Wheat","BurlyWood","Tan","RosyBrown","SandyBrown","Goldenrod","DarkGoldenrod",
              "Peru","Chocolate","SaddleBrown","Sienna","Brown","Maroon","White","Snow","Honeydew","MintCream","Azure","AliceBlue","GhostWhite","WhiteSmoke","Seashell","Beige","OldLace","FloralWhite","Ivory","AntiqueWhite","Linen","LavenderBlush","MistyRose","Gainsboro","LightGrey",
              "Silver","DarkGray","Gray","DimGray","LightSlateGray","SlateGray","DarkSlateGray","Black"];


function makeGrid(number) {
  for(var i=0; i < number; i++){
    var row = document.createElement('div');
    row.className = "row";
    container.appendChild(row);
    for(var j=0; j < number; j++){
      var box = document.createElement("div");
      box.className = "box";
      row.appendChild(box);
      box.innerHTML = " .";
    }
  }
}

makeGrid(50);

function newColor(colorArray){
  for(var i=0; i < colorArray.length; i++){
    var colorSquare = document.createElement('div');
    colorSquare.className = "color";
    colorSquare.id = colorArray[i];
    colorSquare.style.background = colorArray[i];
    colorRow.appendChild(colorSquare);
  }
}

newColor(colorArray);


function colorAssigner(){
  for(var i=0; i< boxes.length; i++){
    boxes[i].onclick = function(){
      this.style.background= color;
      this.style.color= color;
    }
  }
}
colorAssigner();

function colorPicker(){
  for(var i=0; i< colors.length; i++){
    colors[i].onclick = function () {
      color = this.id;
    }
  }
}

colorPicker();
