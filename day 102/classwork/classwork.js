function printElements() {
  let elements = document.getElementsByClassName("class");

  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].innerText);
  }
}

function changeParagraphs() {
  let paragraphs = document.getElementsByTagName("p");

  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerText = "change";
  }
}
console.log(paragraphs);
