/**
	Name: Subham Thakur
	File: main.js
	Date: 31 March 2025
When the user hits a button, this JavaScript code launches a Silly narrative Generator that produces a funny, random narrative. It replaces narrative template placeholders with randomly chosen items from specified arrays. In order to change "Bob" to a personalized name, users can select UK units for temperature and weight conversions. The result() function manages narrative creation, text substitutions, and dynamic webpage changes, whereas the randomValueFromArray() function selects random values. The function is triggered by an event listener on the button, which, when clicked, displays the tale.
**/
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the White House', 'Disneyland', 'the soup kitchen'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:', xItem)
                     .replace(':inserty:', yItem)
                     .replace(':insertz:', zItem);

  if (customName.value !== '') {
    newStory = newStory.replace('Bob', customName.value);
  }

  if (document.getElementById("uk").checked) {
    let weight = Math.round(300 * 0.07) + ' stone';
    let temperature = Math.round((94 - 32) / 1.8) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit', temperature)
                       .replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);

