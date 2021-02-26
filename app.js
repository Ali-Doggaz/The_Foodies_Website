//selecting elements from DOM
const myLis = document.querySelectorAll('nav ul li');
const myCircles = document.querySelectorAll('nav .circle');
const pageTable = [
    document.querySelector('.myMap'),
    document.querySelector('#contact'),
    document.querySelector('.aboutUs')    
];
const [myMap,contactForm, aboutUs]=pageTable;


//deciding the the checks per second 

const framePassed= function(callback){
    window.setTimeout(callback,1000/60);
}


// function change current

const changeCurrent = (i)=> {
    myLis.forEach((element,index)=>{
        element.classList.remove("current");
        myCircles[index].classList.remove("current");
    });
    myLis[i].classList.add("current")
    myCircles[i].classList.add("current");
}



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
    
}

//adding scroll animation
for(let i=0; i<pageTable.length; i++){
    myLis[i].addEventListener('click',
        function(){
            window.scrollTo({
                top: window.innerHeight*i,
                behavior:"smooth"
            })
            changeCurrent(i);
        })
}

//infinite loop function

function settingNavBar(){
    const [myMapPosition,contactFormPosition,aboutUsPosition] = 
        pageTable.map(element=> element.getBoundingClientRect());
    
    console.log(aboutUsPosition.top +" "+window.innerWidth/2);
    
    if(aboutUsPosition.top<=window.innerHeight/2){

        
        changeCurrent(2);
    }
    else if(contactFormPosition.top<=window.innerHeight/2){
        changeCurrent(1);
    }
    else{
        changeCurrent(0);
    }
    

    framePassed(settingNavBar);
}
settingNavBar();

