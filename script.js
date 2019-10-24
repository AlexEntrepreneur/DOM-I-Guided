//====== Selecting HTML Elements ======//
const btnID = document.getElementById('custom-btn');
console.log('btnID:', btnID);

const btnQuery = document.querySelector('#custom-btn');

console.log('btnQuery:', btnQuery);

const btnQueryAll = document.querySelectorAll('button');
console.log('btnQueryAll:', btnQueryAll);

const tagNameTest = document.getElementsByTagName('p');
console.log('tagNameTest:', tagNameTest);

const classQuery = document.getElementsByClassName('container');
console.log('classQuery:', classQuery);

const header = document.querySelector('.services-header');
console.log('header:', header);

const para = document.querySelector('.extra-stuff');
console.log('para:', para);

const className = document.getElementsByClassName('content-area');
console.log('className:', className);

//====== Converting HTMLCollection or NodeList to Arrays ======//
// Array-like objects (they do not have .map, .reduce, .filter)
// HTMLCollection - List of HTML elements
// NodeList - List of all nodes of every type (including HTML elements)
const arrayHTML = Array.from(tagNameTest);
console.log('arrayHTML:', arrayHTML);


//====== Manipulating HTML Elements ======//

// Adding our heading image
const servicesImg = document.querySelector('.services-img');
servicesImg.src = 'https://tk-assets.lambdaschool.com/820014a9-1951-4880-ac41-08202fca5be0_agency-pic.png'
servicesImg.alt = 'Picture of Laptop, Headphones, and Coffee';

// Making our headings bigger & red
const secondaryHeaders = document.querySelectorAll('h2');

secondaryHeaders.forEach(element => {
    element.style.fontSize = '25px';
    element.style.color = '#A0001E';
});

// Removing extra content at the bottom
const bottomDiv = document.querySelector('.bottom-div');

bottomDiv.classList.remove('extra-stuff');

// Make the main image disappear
const mainContentImg = document.querySelector('.main-content img');
mainContentImg.classList.add('invisible');

// Using array methods on HTMLCollection
const newLink = document.getElementsByTagName('a');

const newLinkArray = Array.from(newLink);

newLinkArray.forEach(element => {
    element.classList.add('purple-links');
});

//====== Creating New HTML Elements ======//
// 1- Create Element
const newContent = document.createElement('p');
// 2- Add Content
newContent.textContent = 'Hello, what is your name?';
// 3- Select Target Parent Element
const secondaryContent = document.querySelector('.secondary-content');
// 4- Add Element To Parent
secondaryContent.append(newContent);

// Add as parent element's first child:
// secondaryContent.prepend(newContent);

// AVOID USING INNER HTML PLEASE! THANK YOU.
