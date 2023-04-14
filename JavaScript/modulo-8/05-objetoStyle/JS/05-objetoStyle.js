const title = document.querySelector("h1");
title.style.textAlign="center";
title.style.backgroundColor="yellow";
title.style.padding="10px";

const paragraphs = document.querySelectorAll(".home-content p");

for (const oneParagraphs of paragraphs) {
  oneParagraphs.style.backgroundColor ="green";
  oneParagraphs.style.padding ="15px";
  oneParagraphs.style.color ="#fff";
  oneParagraphs.style.fontFamily ="Verdana"; 
  oneParagraphs.style.lineHeight ="20px";
}