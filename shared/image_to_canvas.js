// just grabbing sources to put together

image = document.createElement('img');
document.body.appendChild(image);
image.setAttribute('style','display:none');
image.setAttribute('alt','script div');
image.setAttribute("src", path);

var imgCanvas = document.createElement("canvas"),
imgContext = imgCanvas.getContext("2d");

// Make sure canvas is as big as the picture
imgCanvas.width = image.width;
imgCanvas.height = image.height;

// Draw image into canvas element
imgContext.drawImage(image, 0, 0, image.width, image.height);
// Save image as a data URL
imgInfom = imgCanvas.toDataURL("image/png");
// localStorage.setItem("imgInfo",imgInfom);
// document.body.removeChild(image);

canvasEl.onclick = function(mouseEvent) 
{
  var imgData = canvasContext.getImageData(mouseEvent.offsetX, mouseEvent.offsetY, 1, 1);
  var rgba = imgData.data;

  alert("rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")");
}