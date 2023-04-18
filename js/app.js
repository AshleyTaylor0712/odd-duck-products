'use strict';

//Display three potential products side-by-side-by-side; 3 diff images

//Store each anonymous vote, calculate totals, and visually display the results.

//Do not allow any results to be shown to users until there have been a total of 25 selections made.

let productArray = [];

let myContainer = document.querySelector('section');

let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');

let viewResultsBtn = document.querySelector('section ~ div');

let counter = 0;
let maxCounter = 25;

function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/assets/${name}.${fileExtension}`;
  this.views = 0;
  this.votes = 0;
}

let bag = new Product('bag');
let banana = new Product('banana');
let bathroom = new Product('bathroom');
let boots = new Product('boots');
let breakfast = new Product('breakfast');
let bubblegum = new Product('bubblegum');
let chair = new Product('chair');
let cthulhu  = new Product('cthulhu');
let dogduck = new Product('dogduck');
let dragon = new Product('dragon');
let pen = new Product('pen');
let petsweep = new Product('petsweep');
let scissors = new Product('scissors');
let shark = new Product('shark');
let sweep = new Product('sweep', 'png');
let tauntaun = new Product('tauntaun');
let unicorn = new Product('unicorn');
let watercan = new Product('watercan');
let wineglass= new Product('wineglass');

productArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, watercan, wineglass);

function selectRandomProduct() {
  return Math.floor(Math.random() * productArray.length);
}


function renderProducts() {
 
  let selectedImages = [];

  while (selectedImages.length < 6) {
    let randomIndex = selectRandomProduct();
    console.log(randomIndex);
    if (!selectedImages.includes(randomIndex)) {
      selectedImages.push(randomIndex);
    }
  }

  let imageOneIndex = selectedImages.shift();
  let imageTwoIndex = selectedImages.shift();
  let imageThreeIndex = selectedImages.shift();

  image1.src = productArray[imageOneIndex].src;
  image1.alt = productArray[imageOneIndex].name;
  productArray[imageOneIndex].views++;

  image2.src = productArray[imageTwoIndex].src;
  image2.alt = productArray[imageTwoIndex].name;
  productArray[imageTwoIndex].views++;

  image3.src = productArray[imageThreeIndex].src;
  image3.alt = productArray[imageThreeIndex].name;
  productArray[imageThreeIndex].views++;
}

function handleProductClick(event) {
  counter++;
  console.log(event.target.alt);
  let clickedProduct = event.target.alt;
  for (let i = 0; i < productArray.length; i++) {
    if (clickedProduct === productArray[i].name) {
      productArray[i].votes++;
      console.log(productArray);
    }
  }
  if (counter < maxCounter) {
    renderProducts();
  } else {
    // remove event listeners
    myContainer.removeEventListener('ckick', handleProductClick);
    viewResultsBtn.addEventListener('click', viewResults);
  }
}

function viewResults() {
  let ul = document.querySelector('ul');
  for (let i = 0; i < ProductArray.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${productArray[i].name} had ${productArray[i].views} views, and ${productArray[i].votes} votes.`;
    ul.appendChild(li);

  }
}

renderProducts();

myContainer.addEventListener('click', handleProductClick);
