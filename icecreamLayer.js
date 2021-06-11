const buttons = document.getElementsByClassName("buttons");

for (const button of buttons) {
  button.addEventListener('click', () => {
     var id = button.getAttribute("id");
    
     var layerClass = ".top-layer";
     var layers = document.querySelectorAll(layerClass);
     for (const layer of layers) {
       layer.classList.toggle("active");
     }
  });
}