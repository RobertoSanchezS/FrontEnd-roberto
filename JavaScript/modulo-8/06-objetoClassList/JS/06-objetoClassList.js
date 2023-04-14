const body = document.querySelector("body");
body.classList.toggle("dark");
const title = document.querySelector("h1");
title.classList.add("main-title");

console.log(title.classList.contains("que-no-existe"));
console.log(title.classList.contains("main-title"));

const paragraphs = document.querySelectorAll(".home-content p");

for (const oneParagraphs of paragraphs) {
  oneParagraphs.classList.add("cool-paragraph");
  // if(oneParagraphs.length > 200) {
  // oneParagraphs.classList.add("cool-paragraph");
  // }
}
for (const oneParagraphs of paragraphs) {
  const lengthparagraph = oneParagraphs.innerText.length;
  if (oneParagraphs.length > 300) {
    oneParagraphs.classList.remove("cool-paragraph");
  }
}
