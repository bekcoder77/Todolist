let input = document.querySelector(".entered-list");
let date_input = document.querySelector(".date_input");
let addBtn = document.querySelector(".add-list");
let tasks = document.querySelector("#tasks");
let select = document.querySelector("#select");
let filterTodo = document.querySelector(".filter-todo");

const checkbox = document.querySelector("#checkbox");
const container = document.querySelector(".container");

checkbox.addEventListener("click", () => {
  container.classList.toggle("active");
});

input.addEventListener("keyup", () => {
  if (input.value.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
});
let i = 0;
// task qoshish
addBtn.addEventListener("click", () => {
  if (input.value.trim() != 0) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const soat = date.getMinutes();
    const d = date.getSeconds();

    const fullyear = `${year}.${month + 1}.${day}`;
    i++;
    let newItem = document.createElement("li");
    newItem.classList.add("item");
    newItem.innerHTML = `<li> ${input.value} </li>
        <p>${fullyear}</p>
        <p>${date_input.value}</p>
        <span class="item-btn">
        <i class="fa-sharp fa-solid fa-pen-to-square"></i>
        <i class="fa-regular fa-rectangle-xmark"></i>
        </span> `;
    // appenChild Content qo'shish uchun ishlatiladi va oxirgi sifatida qo'shadi
    tasks.appendChild(newItem);
    input.value = "";
  } else {
    alert(" Don't be Sheep Please Enter a Task :)");
  }
});
// tasklarni o'chirish
tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-rectangle-xmark")) {
    e.target.parentElement.parentElement.remove();
  }
});
// bajarilgan ishlar
tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-pen-to-square")) {
    e.target.parentElement.parentElement.classList.toggle("completed");
  }
});

