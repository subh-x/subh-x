/**
	Name: Subham Thakur
	File: index.html
	Date: 31 March 2025
Address problems with color contrast, semantic HTML, photos, music, forms, interactive components, and tables to make a fictitious nature site more accessible. Test and modify the background and text colors to improve readability. For improved screen reader navigation, update the HTML structure by using a semantic <nav> element for <div class="nav">. To accommodate deaf people and give a fallback for outdated browsers, make sure pictures include alt attributes and provide transcripts for the <audio> element. By appropriately linking <label> components with inputs and providing screen reader-only labels, you may increase form accessibility. Make sure users can concentrate and use the keyboard to trigger the show/hide comments feature. Include a summary for clarity and header associations to increase table accessibility. As a result, the website is completely accessible and inclusive to all users.
**/
// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};
showHideBtn.onkeydown = (e) => {
  if (e.key === "Enter") {
    showHideBtn.click();
  }
}
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}

const transcript = document.querySelector('.transcript');
const transcriptBtn = document.querySelector('.transcript-button');
const transcriptCon = document.querySelector('.transcript-container')

transcriptBtn.onclick = () => {
  if(transcriptBtn.textContent === 'Show transcript') {
    transcript.style.display = "block";
    transcriptBtn.textContent = 'Hide transcript';
  } else {
    transcript.style.display = "none";
    transcriptBtn.textContent = 'Show transcript'
  }
}

const nav = document.querySelector("nav")
const hamIcon = document.querySelector(".hamIcon")
const navMenu = document.querySelector("nav ul")
navMenu.className = "hidden";

hamIcon.onclick = () => {
  if(navMenu.className === "hidden") {
    navMenu.style.visibility = "visible";
    navMenu.className = "visible";
  } else if (navMenu.className === "visible") {
    navMenu.style.visibility = "hidden";
    navMenu.className = "hidden";
  }
}

