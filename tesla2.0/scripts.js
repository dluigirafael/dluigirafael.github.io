let target = document.getElementsByClassName("bottom"); //select  bottom div
let button = document.getElementsByClassName("button"); //select pressed button
let img = document.getElementsByClassName("img")[0];
//target[0].style.display = "block"; //fix first page not showing on page load

function active(selected) {
  for (let i = 0; i < target.length; i++) {
    target[i].style.display = "none"; //   prevent divs from stacking up
    button[i].style.backgroundColor = "red";
  }

  target[selected].style.display = "block";
  button[selected].style.backgroundColor = "black";
  img.src="./img/" +selected +".jpg";  //add too img for model
 
}


// kill me