/*   
console object methods
1. assert()- used to assert a condition
2. clear()- used to clear the console
3. count()- used to count the number that the function hit by the count
4. error()- used to log error message to the console
5. log()- used to log the output to the console
6. table()- used to display data as a table
7. warn()- used to log a warning message to the console
8. time()- used to start a timer
9. timeEnd()- used to end a timer
10. info()- used to log an info message to the console

most used
1. alert()- used to display a message in a dialog box
2. prompt()- used to get input from the user
3. confirm()- used to get confirmation from the user



document object model it can make me acess 

1. document.body -- give full body of html
2. document.body.childNodes-- give all the children== can be accesed individual child as document.body.childNodes[0]
    new line is considered text in child , space is also text
3. document.body.firstchild/lastchild-- will give first ior last elemt can be text or any element.
4. document.body.firstElementChild-- gives first elemt and skips all text(space,new line) 
5. document.body.lastElementChild.Style.color="red" -- will change last child color to red
6. document.body.lastElementChild.parentElement -- will give the parent of last child
7.document.body.firstchild/lastchild.childnodes -- will give all nodes of first or last child will also include text/comment
8. document.body.firstchild/lastchild.children -- will remove teext/comment only element
9. document.body.firstchild/lastchild.children.Previous/nextElementsibling -- same thing inside one parent
*/

//most important
let bhavi = document.getElementsByClassName("box"); // will give all the elements with classname box
console.log(bhavi);
3;
bhavi[2].style.backgroundColor = "red"; // will change 3rd box color to red

document.getElementById("blue").style.color = "white";
document.getElementById("blue").style.backgroundColor = "black";

document.querySelector(".box").style.backgroundColor = "pink";
// will select first element of classname box

document.querySelectorAll(".box").forEach((box) => {
  box.style.backgroundColor = "pink";
});
//returns the html collection
// and this cannot be styled simply by .style.colour this needs loop

console.log(document.getElementsByTagName("div")); //give all div

/*
most used
1.  const title = document.getElementById('main-title');
    console.log(title.textContent); // Logs the text inside the element with ID 'main-title'

2. const firstButton = document.querySelector('.btn');//selects the first button with class btn

3. const buttons = document.querySelectorAll('.btn');//selects all the buttons with class btn

4. const items = document.querySelectorAll('.list-item');
   items.forEach(item => console.log(item.textContent));//logs the text content of each item

*****Manipulating the DOM*******
 1. const header = document.getElementById('header');
    header.textContent = 'New Title'; // Changes the inner text
    header.innerHTML = '<span>Styled Title</span>'; // Inserts HTML

 2. const box = document.querySelector('.box');
    box.style.backgroundColor = 'blue'; // Dynamically change styles

 3. const button = document.querySelector('button'); // Selects the first button
    button.classList.add('active'); // Adds a class
    button.classList.remove('hidden'); // Removes a class
    button.classList.toggle('active'); // Adds if not present, removes if present

    **********handling events**********
    1. const button = document.querySelector('button');
       button.addEventListener('click', () => {
       alert('Button clicked!');
                            });
    2. const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
        btn.addEventListener('click', (event) => {
        console.log(event.target.textContent); // Logs the text of the clicked button
        });
        });

        ********traveling the DOM************

    1. const item = document.querySelector('.list-item');
       console.log(item.parentElement); // Access the parent
       console.log(item.children); // Access child elements
       console.log(item.nextElementSibling); // Access next sibling
       console.log(item.previousElementSibling); // Access previous sibling
    

       *******adding and removing elements********
       
    1. const newDiv = document.createElement('div');
       newDiv.textContent = 'Hello, World!';
       document.body.appendChild(newDiv); // Adds the element to the page

    2.const unwantedDiv = document.getElementById('remove-me');
      unwantedDiv.remove();




*/
