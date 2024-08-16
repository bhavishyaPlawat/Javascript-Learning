/*   
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
let bhavi = document.getElementsByClassName("box");
console.log(bhavi);
bhavi[2].style.backgroundColor = "red";

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
