/**
	Name: Subham Thakur
	File: main.js
	Date: 31 March 2025
The "bouncing balls" animation in this project is an entertaining and interactive JavaScript exercise that makes use of object-oriented programming. We create many balls with random characteristics like location, velocity, size, and color using the Canvas API for rendering and requestAnimationFrame for fluid animation. Every ball travels on its own, bouncing off the boundaries of the screen and identifying other balls that collide with it to change color. Key JavaScript ideas including class-based object modeling, random value generation, collision detection, and animation loops are all included in the application. This practical exercise introduces fundamental game physics and graphics concepts while reinforcing object-oriented strategies.	
**/
  // setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
