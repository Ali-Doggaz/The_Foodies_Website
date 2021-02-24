//selecting elements from DOM
const myLis = document.querySelectorAll('nav ul li');
const myCircles = document.querySelectorAll('nav .circle');
const pageTable = [
    document.querySelector('.myMap'),
    document.querySelector('.contactForm'),
    document.querySelector('.aboutUs')];
const [myMap,contactForm,aboutUs]=pageTable;

//adding nav animation
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

//adding scroll animation
for(let i=0; i<pageTable.length; i++){
    myLis[i].addEventListener('click',
        function(){
            console.log(pageTable[i].getBoundingClientRect())
            window.scrollTo({
                top: window.innerHeight*i,
                behavior:"smooth"
            })
            myLis.forEach(element=>{
                element.classList.remove("current");
            });
            myLis[i].classList.add("current")
        })
}