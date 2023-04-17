const rightArr = document.querySelector('.rightArr'), leftArr = document.querySelector('.leftArr');
const changeImgs = document.querySelector('.sliderChange');
const imgs = document.querySelectorAll('.image');
const buttons = document.querySelectorAll('.sliderBut')

function changeBut(i){
    changeImgs.style.transform = `translateX(${i * -500}px)`;
    for(let j of buttons) j.style.backgroundColor = 'transparent';
    buttons[i].style.backgroundColor = 'white';
}

let slideNum = 1;

rightArr.addEventListener('click', function(){
    if(slideNum < imgs.length) {
    changeImgs.style.transform = `translateX(${slideNum * -500}px)`
    changeBut(slideNum)
    slideNum++;
    }
    else{
        changeImgs.style.transform = `translateX(0px)`
        slideNum = 1;
        changeBut(slideNum-1)
    }
})

leftArr.addEventListener('click', function(){
    slideNum--;
    
    if(slideNum > 0){
        changeBut(slideNum-1)
        changeImgs.style.transform = `translateX(${(slideNum-1) * -500}px)`;
    }
    else{
        slideNum = imgs.length-1;
       
        changeImgs.style.transform = `translateX(${slideNum * -500}px)`
        slideNum++;
        changeBut(slideNum-1)
        
    }
})

buttons[0].style.backgroundColor = 'white'

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        changeBut(i)
    })
}