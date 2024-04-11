document.addEventListener("DOMContentLoaded", function() {
   
    const catImage = document.getElementById("cat");
    const displayText = document.getElementById("displayText");
    const changeTextButton = document.getElementById("changeText");

    catImage.addEventListener("mouseover", function() {
        catImage.src = "funny cat.jpeg"; 
    });

    changeTextButton.addEventListener("click", function() {
        displayText.textContent = "Text Changed!"; 
    });
});
