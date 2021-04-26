
// Get the button that opens the modal
var tbtn = document.querySelectorAll("#myBtn");

// Get the <span> element that closes the modal
var tspan = document.querySelectorAll(".close");



// When the user clicks on the button, open the modal
for (var i = 0; i < tbtn.length; i++) {
  tbtn[i].onclick = function(e) {
     e.preventDefault();
     modal = document.getElementById(e.target.getAttribute("href"));
     
     modal.style.display = "block";
  }
 }
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// for(var i=0;i<tspan.length;i++)
// {
  for (var i = 0; i < tspan.length; i++) {
  tspan[i].onclick=function(){
    var tmodal=document.querySelectorAll(".modal");
    for(var index in tmodal)
    {
      if (typeof tmodal[index].style !== 'undefined') tmodal[index].style.display = "none";
    }}
   
  }

 // for(var j=0;j<tmodal.length;j++)
    // {console.log(tmodal[j]);
    //   tmodal[j].style.display = "none";}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}