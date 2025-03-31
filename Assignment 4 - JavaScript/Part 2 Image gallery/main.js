/**
	Name: Subham Thakur
	File: main.js
	Date: 31 March 2025
This Image Gallery, which is driven by JavaScript, lets users change a darkening effect while dynamically displaying photos. The script initially loops through a list of potential text and picture filenames to fill a thumbnail bar. The matching selection is added to the main displayed image when you click on a thumbnail. A button also modifies the backdrop opacity of the primary picture to activate a dark overlay effect. Event listeners manage user interactions, guaranteeing seamless transitions and updates. Basic JavaScript ideas like loops, event handling, DOM manipulation, and conditional logic are reinforced in this project.
**/
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
