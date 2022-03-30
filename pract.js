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



//------------------Examine The Document Object-------------------//
// console.log(document.title)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all[10])
// console.log(document.forms)
// console.log(document.links)


//-------------------------GET ELEMENT BY ID-----------------------//
// let mainHeader = document.getElementById('main-header');
// mainHeader.style.borderBottom = 'solid 5px blue'
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle)
// headerTitle.textContent = 'Hello World'
// headerTitle.style.borderBottom = 'solid 5px black'


//--------------GET ELEMENTS BY CLASSNAME----------------
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


//----------------QUERYSELECTOR (ONLY GRABS ONE ITEM)
// let input = document.getElementById('mainInput')
// input.value = 'Name';

//------------------QUERYSELECTOR ALL----------------//
// let titles = document.querySelectorAll('.title');
// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for(let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'gray'
//     even[i].style.backgroundColor = 'green'

// }


//---------------TRAVERSING THE DOM----------------------//
// let itemList = document.querySelector('#items');
// //parentNOde
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = '#f4f4f4'

// //CHILDNODES
// // console.log(itemList.childNodes)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor = '#f4f4f4'

// //FIRST CHILD
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = 'Hello World'


//  //nextSibling
//  console.log(itemList.nextSibling);
//  //nextElementSibling
//  console.log(itemList.nextElementSibling)


//--------------//CREATE ELEMENT---------------
// let myDiv = document.createElement('div');
// myDiv.className = 'myDiv'; //add class
// myDiv.id = 'myDiv1' //add id
// myDiv.setAttribute('title', 'Hello Div'); //add title attribute
// let myDivTxt = document.createTextNode('Hello World!'); //creating a text node for myDiv
// myDiv.appendChild(myDivTxt); //append child to the div
// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');
// container.insertBefore(myDiv, h1)
// myDiv.style.fontSize = '30px';
// console.log(myDiv);




//------------------//ADDING EVENT LISTENER -----------------------------------
//(CLICK EVENTS)
// let button = document.getElementById('button').addEventListener(
// 'click', function(e){
//     // console.log('Button Clicked')
//     // document.getElementById('header-title').textContent = 'Changed';
//     // document.querySelector('#main').style.backgroundColor = 'red';
//     // console.log(e)
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // let output = document.getElementById('output');
//     // output.innerHTML = '<h3>' + e.target.id+'</h3>';
//     // console.log(e.type)
//     // console.log(e.clientX)
//     // console.log(e.clientY)
//     // console.log(e.offsetX)
//     // console.log(e.offsetY)
//     // console.log(e.altKey)
//     // console.log(e.shiftKey)
//     // console.log(e.ctrlKey)
// });


//(MOUSE EVENTS)
// let box = document.getElementById('box');
// box.addEventListener('mouseenter', runEvent) //----mouseenter event
// box.addEventListener('mouseleave', runEvent) //----mouseleave event
// box.addEventListener('mouseover', runEvent) //mouseover event
// box.addEventListener('mouseout', runEvent)//---mouseout event
// box.addEventListener('mousemove', runEvent);//-----mousemove event
// let button = document.getElementById('button')
// button.addEventListener('click', runEvent) //------click event
// button.addEventListener('dblclick', runEvent) //------double click event
// button.addEventListener('mousedown', runEvent) //-----mousedown event
// button.addEventListener('mouseup', runEvent) //------mouseup event

//function runEvent(e){
   // console.log('EVENT TYPE:' +e.type)
    // let output = document.getElementById('output');
    // output.innerHTML = '<h3>MouseX:' + e.offsetX + ' </h3><h3>MouseY: '
    // +e.offsetY + '</h3>';-----------------get the position of the mouse in the output div

    // box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";//-----change the background color of the box based on the position of the mouse useing rgb(red, green, blue)
    // document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";//-----change the background color of the DOCUMENT BODY based on the position of the mouse useing rgb(red, green, blue)
//}

//(KEYBOARD EVENTS)
// let itemInput = document.querySelector('input[type="text"]')//----setting a variable on the input box with type of text
// let form = document.querySelector('form');//----grabing the form on the page
// // itemInput.addEventListener('keydown', runEvent)//----everytime a key on the keyboard is pressed down
// // itemInput.addEventListener('keyup', runEvent)//----fires once a key on the keyboard is released
// // itemInput.addEventListener('keypress', runEvent)//----fires once a key on the keyboard is pressed
// // itemInput.addEventListener('fucus', runEvent)//----element comes alive when clicked
// // itemInput.addEventListener('blur', runEvent)//----element is blurred
// // itemInput.addEventListener('cut', runEvent)//-----cut
// // itemInput.addEventListener('paste', runEvent)//-----paste
// // function runEvent(e){
// //     // console.log('EVENT HAS BEEN FIRED')//----letting us know that the event is working
// //     // console.log(e.target.value)//---capturing the value (the txt that's typed into the input box) and loging it to the console
// //     let box = document.getElementById('box');
// //     // box.textContent = e.target.value;//----using text
// //     box.innerHTML = "<h3>"+e.target.value+'</h3>'//----content is an h3
// // }


//(CHANGE EVENTS)
// let select = document.querySelector('select');
// select.addEventListener('change', runEvent);
// function runEvent(e){
//     console.log('EVENT TYPE:' +e.type)//getting the event type
//     console.log(e.target.value)//catching the value of the event change
// }

//(SUBMIT EVENT)
// let form = document.querySelector('form');//----grabing the form on the document
// form.addEventListener('submit', runEvent)//---submit event
// function runEvent(e){
//     console.log('EVENT TYPE:' + e.type)//----the type of event
//     e.preventDefault();//preventing the submit button in the form from submitting to an extrnal file
// }






//-------BUILDING THE ACTUAL USER PAGE (FINAL PROJECT)---------//

// let form = document.getElementById('addForm');//add items form
// let itemList  = document.getElementById('items');// GRABBING THE LIST ITEMS AND ADDING THE NEW VALUE THAT WAS ENTERED INTO THE ADD ITEMS INPUT BOX

// //FORM SUBMIT EVENT
// form.addEventListener('submit', addItem)
// //ADD ITEM FUNCTION WITH DELET BUTTON
// function addItem(e){
//     e.preventDefault();//stop the funcion from fireing improperly
//     console.log('submit')//---CHECKING TO MAKE SURE THE SUBMIT LISTENER IS WORKING WHEN THE SUBMIT BUTTON IS CLICKED
//     let newItem = document.getElementById('item').value;//GET THE INPUT VALUE AND ADDING THE NEW VALUE THAT WAS ENTERED INTO THE ADD ITEMS INPUT BOX
//     var li = document.createElement('li')//CREATE A NEW LIST ELEMENT
//     li.className = 'list-group-item';
//     console.log(li)//----CHECKING TO MAKE SURE IT WORKS
//     li.appendChild(document.createTextNode(newItem))//----ADDING TXT NODE WITH THE INPUT VALUE THAT COMES FROM THE FORM
//     let deleteButton = document.createElement('button')//DELETE BUTTON ELEMENT
//     deleteButton.className = 'btn btn-danger btn-sm float-right delete'//ADD ALL CLASSES ON THE DELETE BUTTON THAT ARE IN THE HTML FILE
//     deleteButton.appendChild(document.createTextNode('X'))//CREATEING THE TEXT NODE (THE 'X' ICON THAT WILL BE THE BUTTON)
//     li.appendChild(deleteButton)//APPEND THE BUTTON TO THE LI
//     itemList.appendChild(li)
// }



// //DELETE ITEM EVENT
// itemList.addEventListener('click', removeItem)//LISTENING FOR THE 'CLICK' EVENT ON THE DELETE BUTTON
// //REMOVE ITEM FUNCTION
// function removeItem(e){
//     //CHECKING IF THE CLASSLIST VARIABLE, THE ITEMS SECTION,ELEMENTS CONTAINS THE CLASS NAME OF "delete"
//     if(e.target.classList.contains('delete')){
//         //CONFIRMING IF THE USER WANTS TO DELETE
//         if(confirm('ARE YOU SURE')){
//             //IF THEY CHOOSE YES
//             var li = e.target.parentElement;// THE PARENT ELEMENT OF THE BUTTON WHICH IS THE LI ELEMENT
//             itemList.removeChild(li)//REMOVE THE CHILD OF THE ITEM LIST WICH IS THE UL
//         }
//     }
// }



// //FILTER ITEMS EVENT
// let filter = document.getElementById('filter')
// filter.addEventListener('keyup', filterItems)

// function filterItems(e){
//    let text = e.target.value.toLowerCase() //CONVERT TO LOWERCASE
//    console.log(text)//---checking to see if it works properly

//    var items = itemList.getElementsByTagName('li') //GRABING ALL OF THE LI'S IN THE ITEMS LIST
//    //converting items list into an array instead of a collection and geting the item name
//    Array.from(items).forEach(function(item){
//        //getting the item name
//     let itemName = item.firstChild.textContent;
//     // console.log(itemName)//cheching for if its working

//     //compaire the item name to the search box text. (we want to convert the compaired items to lowercase since we converted the search (filter) items to lowercase  
//     //If the item name(text) is not equal to -1, that means its a match for whatever iteration it is on
//     if(itemName.toLowerCase().indexOf(text) != -1){
//         item.style.display = 'block';
//     }else{
//         //do not display if it is not a match
//         item.style.display = 'none';
//     }
//    })









}

