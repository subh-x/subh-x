/**
	Name: Subham Thakur
	File: main.js
	Date: 31 March 2025
This Image Gallery, which is driven by JavaScript, lets users change a darkening effect while dynamically displaying photos. The script initially loops through a list of potential text and picture filenames to fill a thumbnail bar. The matching selection is added to the main displayed image when you click on a thumbnail. A button also modifies the backdrop opacity of the primary picture to activate a dark overlay effect. Event listeners manage user interactions, guaranteeing seamless transitions and updates. Basic JavaScript ideas like loops, event handling, DOM manipulation, and conditional logic are reinforced in this project.
**/
function loopingImg(){
  for(let i = 1; i < 6; i++){
    let newImage = document.createElement('img');
    let image = 'images/pic'+ i + '.jpg' ;
    newImage.setAttribute('src', image);
    document.querySelector('.thumb-bar').appendChild(newImage); 
  }
}

function clickImg(){
  SetImgSrc = function(){
    let attribute = this.getAttribute('src'); 
    let displayedImage = document.querySelector('.displayed-img');
    displayedImage.setAttribute('src', attribute);
  }
  let elements = document.querySelectorAll('img');
  Array.from(elements).forEach(function(element) {
    element.addEventListener('click', SetImgSrc);
  });
}
function darkenImg(){
  let buttonNode = document.querySelector('.dark');
  let overlay = document.querySelector('.overlay');
  
  buttonNode.addEventListener('click', ()=>{
    if (buttonNode.getAttribute('class','dark')==='dark'){
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
      buttonNode.setAttribute('class','light');
      buttonNode.textContent = 'lighten';
    }
    else{
      buttonNode.setAttribute('class','dark');
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
      buttonNode.textContent = 'darken';
    }
    
  });
}
window.addEventListener('load', (event) => {
  loopingImg();
  clickImg();
  darkenImg();
});

