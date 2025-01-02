function createCard(title, cName, duration, views, monthsOld, thumbnail) {
  document.querySelector(".title").innerHTML =
    "javascript exercise-13 | dynamic website builder";
  document.querySelector(".Cname").innerHTML = "codeWithHarry";
  document.querySelector(".duration").innerHTML = "31:22";
  document.querySelector(
    ".thumbnail"
  ).innerHTML = ` <img src="https://i.ytimg.com/vi/9JaDBYPmiJ0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD2F1t93-iBW0-yJJptKjyJhXXFhA" />`;
  document.querySelector(".monthsOld").innerHTML = "7month";
}
