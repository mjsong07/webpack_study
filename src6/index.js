
import pic from "./logo.jpg";
var img = new Image();
img.src = pic;
img.classList.add("logo");
var root = document.getElementById("root");
root.append(img);