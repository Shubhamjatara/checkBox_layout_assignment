//Getting classess
const input = document.getElementsByTagName("input");
const arr = Array.from(input);

const border = document.getElementsByClassName("border");

const hidethisClass = document.getElementsByClassName("hidethis");
const overlayClass = document.getElementsByClassName("overlay");

//Bydefault second element will be default choice
hidethisClass[1].style = "display:block";

//Bydedault overlay on second input element
overlayClass[1].style = "width:100%; height:100%";

//default border
border[1].classList.add("border-green");

//adding event listener to each input elements
arr.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    border[index].classList.add("border-green");
    overlayClass[index].style = "width:100%; height:100%";
    hidethisClass[index].style = "display:block;";
    for (let i = 0; i < arr.length; i++) {
      if (index != i) {
        border[i].classList.remove("border-green");
        input[i].checked = false;
        overlayClass[i].style = "width:0; height:0;";
        hidethisClass[i].style = "display:none;";
      }
    }
  });
});
