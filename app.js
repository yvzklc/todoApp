const addButton = document.getElementById("add");
const input = document.querySelector("#input");
const day = document.querySelector(".day");
const ul = document.querySelector("ul");

const dayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

day.textContent = dayName[new Date().getDay()];

addButton.addEventListener("click", () => {
  if (!input.value.trim()) {
    alert("enter a to-do");
  } else {
    // ? todo lar eklenince oluşacak elemanlarımız
    const li = document.createElement("li");
    const p = document.createElement("p");
    const task = document.createElement("span");
    const deleteButton = document.createElement("button");

    //  ? todo lar

    ul.appendChild(li);
    li.appendChild(p);
    li.appendChild(task);
    li.appendChild(deleteButton);
    const text = document.createTextNode(input.value);
    const x = document.createTextNode("X");
    // task.appendChild(text)
    p.classList.add("circle");
    li.classList.add("li");
    task.classList.add("task");
    deleteButton.classList.add("delete");

    // task.textContent = input.value;
    // deleteButton.textContent = x
    task.appendChild(text);
    deleteButton.appendChild(x);
    input.value = "";
  }
  const textValue = document.querySelector(".text1").value
  if(arr.includes(textValue)){
      alert("Bu değer zaten girildi")
  }else {
  arr.push(text1.value)
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("circle")) {
    e.target.classList.toggle("pchecked");
    e.target
      .closest("li")
      .querySelector("span")
      .classList.toggle("span-checked");
  } else if (e.target.classList.contains("li")) {
    e.target.querySelector("p").classList.toggle("pchecked");

    e.target.querySelector("span").classList.toggle("span-checked");
  } else if (e.target.classList.contains("task")) {
    e.target.classList.toggle("span-checked");
    e.target.previousElementSibling.classList.toggle("pchecked");
  }
});
