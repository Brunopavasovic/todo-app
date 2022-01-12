let changeBgToDark = document.getElementById("theme-changer-moon");
let changeBgToWhite = document.getElementById('theme-changer-sun');
let del = document.querySelector('remove');
let input = document.querySelector("input");
let ul = document.querySelector("ul");

/* change theme to dark */

changeBgToDark.addEventListener("click" ,() => {
   document.querySelector('body').classList = [changeBgToDark.click ? 'dark-theme' : 'white-theme'];
   changeBgToDark.style.display = "none";
   changeBgToWhite.style.display = "block";
  
});

/* change theme do light */

changeBgToWhite.addEventListener("click", () => {
   document.querySelector('body').classList = [changeBgToWhite.click ? 'white-theme' : 'dark-theme'];
   changeBgToWhite.style.display = "none";
   changeBgToDark.style.display = "block";
});

input.addEventListener('keypress' , (e) => {
  if(e.charCode === 13 && input.value.length > 0) {
      createTodo(input.value);
      input.value ="";
  }
});


const createTodo = (txt) => {
    let elem = document.createElement('li');
    elem.innerHTML = ` <label class="list-container">
          <input type="checkbox">
          <span class="txt">${txt}</span>
          <span class="checkmark"></span>
          </label>
            <span class="remove"></span>`;
            ul.append(elem);
}
 
const deleteTodo = (elem) => {
  elem.remove();
}

ul.addEventListener('click' , (event) => {
    if(event.target.classList.contains('remove')) {
        deleteTodo(event.target.parentElement);
    }
})

  

