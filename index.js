let changeBgToDark = document.getElementById("theme-changer-moon");
let changeBgToWhite = document.getElementById('theme-changer-sun');
let del = document.querySelector('remove');
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let showItemsLeft = document.getElementById('items-left');
let showCompletedEl = document.getElementById('show-completed');
let showAllTodos = document.getElementById('show-all');
let showActiveTodods = document.getElementById('show-active');
let clearCompletedTodos = document.getElementById('clear-completed');

let arr =
[
  //{ content: 'Groceries', done: false, id: 'b3a678e10e078' },
  //{ content: 'Groceries', done: false, id: 'b3a678e10e078' },
];
window.arr = arr;
const uniqueId = () => Math.random().toString(16).slice(2);

changeBgToDark.addEventListener("click", () => {
  document.querySelector('body').classList = [changeBgToDark.click ? 'dark-theme' : 'white-theme'];
  changeBgToDark.style.display = "none";
  changeBgToWhite.style.display = "block";

});

changeBgToWhite.addEventListener("click", () => {
  document.querySelector('body').classList = [changeBgToWhite.click ? 'white-theme' : 'dark-theme'];
  changeBgToWhite.style.display = "none";
  changeBgToDark.style.display = "block";
});

input.addEventListener('keypress', (e) => {
  if (['Enter', 'NumpadEnter'].includes(e.code) && input.value.length > 0) {
    createTodo(input.value);
    input.value = "";
  }
});

const createTodo = (txt) => {
  const id = uniqueId();
  let elem = document.createElement('li');
  elem.innerHTML = `
    <label class="list-container">
      <input type="checkbox" class="checkbox-done" value="${id}">
      <span class="txt">${txt}</span>
      <span class="checkmark"></span>
    </label>
    <button class="remove"></button>
  `;
  
  ul.append(elem);
  showNum();
  filterItemsOnChange();


 arr.push({
  id,
  content: txt,
  done : false
 });
 console.log(arr);
 
  
}

const deleteTodo = (elem) => {
  let id = elem.querySelector('.checkbox-done').value;
  arr = arr.filter(item => item.id !== id);
  
  console.log('Deleting li: ', elem, id, arr);

  elem.remove();
  showNum();
}



ul.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove')) {
    deleteTodo(event.target.parentElement);
   
   /*  delArr(); */
    

  }
})

const showNum = () => {
  console.log('showNum');
  let ckbox = document.querySelectorAll('.checkbox-done');
  let checkedBox = document.querySelectorAll('.checkbox-done:checked');
  let notChecked = document.querySelectorAll('.checkbox-done:not(:checked)');
  /* showItemsLeft.innerText = `Items left: ${ckbox.length}`; */
  document.querySelector('#show-all .counter').innerText = `(${ckbox.length})`;
  document.querySelector('#show-completed .counter').innerText = `(${checkedBox.length})`;
  document.querySelector('#show-active .counter').innerText = `(${notChecked.length})`;

}

// proci kroz sve checkboxove i naci vrijednost done 

const toggleDone = (ev) => {
  const { value: id, checked: done } = ev.target;
  let obj = arr.find(o => o.id === id);
      console.log(obj);
  obj.done = done;
  
};

const clearArray = () => {
 arr = arr.filter(item => !item.done);
 console.log(arr);
}

const delArray = () => {
  document.querySelector('li')
}

// dodaj evt listnr na chbox -change

const filterItemsOnChange = () => {
  document.querySelectorAll('.checkbox-done').forEach((checkbox) => {
    checkbox.addEventListener('change', showNum);
    checkbox.addEventListener('change', toggleDone);
   
  })
};


const showAll = () => {
  document.querySelectorAll('.checkbox-done').forEach((checkbox) => {
    const item = checkbox.closest('li');
    item.style.display = 'block';

  })
};



const showActive = () => {
  document.querySelectorAll('.checkbox-done').forEach((checkbox) => {
    const item = checkbox.closest('li');
    item.style.display = checkbox.checked ? 'none' : 'block';

  }
  )
};


const showCompleted = () => {
  document.querySelectorAll('.checkbox-done').forEach((checkbox) => {
    const item = checkbox.closest('li');
    item.style.display = checkbox.checked ? 'block' : 'none';
  })
};


const clearCompleted = () => {
  document.querySelectorAll('.checkbox-done').forEach((checkbox) => {
    const item = checkbox.closest('li');
    if (checkbox.checked) {
      deleteTodo(item);
      showNum();
      clearArray()
    }
    else {
      item.style.display = 'block';
    }
  })
}





showCompletedEl.addEventListener('click', showCompleted);
showAllTodos.addEventListener('click', showAll);
showActiveTodods.addEventListener('click', showActive);
clearCompletedTodos.addEventListener('click', clearCompleted);




createTodo('Groceries');
createTodo('Work');
showNum();
filterItemsOnChange();


