const myLis = document.querySelectorAll('nav ul li');
const myCircles = document.querySelectorAll('nav .circle');


for(let i =0; i<myLis.length; i++){
    if(!myLis[i].classList.contains("current")){
        myLis[i].addEventListener('mouseover',()=>{
            myCircles[i].style.transform = "scale(1.5)"
        })
        myLis[i].addEventListener('mouseout',()=>{
            myCircles[i].style.transform = "none"
        })
    }
    else {
        myCircles[i].style.transform = "scale(1.5)"
    }
}

