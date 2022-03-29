// let container = document.querySelector('#container');

// let content = document.createElement('p');
// content.classList.add('content');
// content.textContent = 'This is a paragraph';
// container.appendChild(content)

// let paragraph = document.createElement('p');
// paragraph.textContent = 'I am RED';
// paragraph.style.color = 'red';
// content.appendChild(paragraph)

// let myH3 = document.createElement('h3');
// myH3.textContent = 'I am BLUE';
// myH3.style.color = 'blue';
// content.appendChild(myH3)

// let newDiv = document.createElement('div');
// newDiv.style.border = 'pink 20px';
// newDiv.style.backgroundColor = 'black'
// content.appendChild(newDiv)

// let myH1 = document.createElement('h1');
// myH1.textContent = "I'm a DIV";
// myH1.style.color = 'white'
// newDiv.appendChild(myH1)

// let myP = document.createElement('p');
// myP.textContent = 'ME TOO';
// myP.style.color = 'white';
// newDiv.appendChild(myP)

// const btn = document.querySelector('#btn');
// // btn.onclick = () => alert('HEllO WORLD')
// btn.addEventListener('click', alertFunction)

// const myBtn = document.querySelector('#myBtn');
// // myBtn.onclick = () => alert('HELLO WORLD'), console.log('HELLO WORLD')
// myBtn.onclick alertFunction;

// function alertFunction(e){
//     console.log(e.target)
//     e.target.style.backgroundColor = 'red'
// };



//Examine The Document Object
// console.log(document.title)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all[10])
// console.log(document.forms)
// console.log(document.links)


//GET ELEMENT BY ID
// let mainHeader = document.getElementById('main-header');
// mainHeader.style.borderBottom = 'solid 5px blue'
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle)
// headerTitle.textContent = 'Hello World'
// headerTitle.style.borderBottom = 'solid 5px black'

//GET ELEMENTS BY CLASSNAME
// let items = document.getElementsByClassName('list-group-item');
// let firsItem = items[0];
// firsItem.textContent = 'Type Hello';
// firsItem.style.fontWeight = 'bold';
// firsItem.style.backgroundColor = 'red';
// for(let i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }


//GET ELEMENTS BY TAGNAME
//Same as className


//QUERYSELECTOR (ONLY GRABS ONE ITEM)
// let input = document.getElementById('mainInput')
// input.value = 'Name';

//QUERYSELECTOR ALL//
// let titles = document.querySelectorAll('.title');
// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for(let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'gray'
//     even[i].style.backgroundColor = 'green'

// }


//TRAVERSING THE DOM//
let itemList = document.querySelector('#items');
//parentNOde
console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor = '#f4f4f4'

//CHILDNODES
// console.log(itemList.childNodes)
console.log(itemList.children[1])
itemList.children[1].style.backgroundColor = '#f4f4f4'

//FIRST CHILD
console.log(itemList.firstElementChild)
itemList.firstElementChild.textContent = 'Hello World'