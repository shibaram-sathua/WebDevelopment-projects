const button = document.querySelector(".button");
const body = document.body;
button.addEventListener("click", (event) => {
    button.textContent = "Background iamge is changed";
    button.style.width = "150px";
    button.style.textAlign = "center";
    button.style.backgroundColor = "black";
    button.style.color = "#FFFFFF";
    button.style.border = "1px solid red";
    body.style.backgroundImage = "url('./pexels-cátia-matos-1072179.jpg')";
    button.style.boxShadow = "none";
    button.style.fontSize = "13px";
    content.style.color = "#FFFFFF";
});
