// Code: browser.js
do {
  let age = prompt("enter your age");
  if (0 < age && age < 18) {
    alert("you cannot drive");
    document.body.style.backgroundColor = "red";
  } else if (age < 4) {
    location.href = "https://www.google.com"; // redirect to google
  } else if (age < 0) {
    console.error("enter valid age");
  } else {
    alert("you can drive");
    document.body.style.backgroundColor = "yellow";
  }
} while (confirm("do you want to answer again") == true);
