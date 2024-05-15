const userTask = document.querySelector("#user-task");
const addIcon = document.querySelector(".fa-solid");
const ul = document.querySelector("#ul");
const userTaskValues = [];
let getuserData = localStorage.getItem("usersTask");
if (getuserData != null) {
  let data = JSON.parse(getuserData);
  console.log(data);
}

addIcon.addEventListener("click", function () {
  let li = document.createElement("li");
  if (!userTask.value) {
    alert("please add your task first");
    li.className.remove("task");
  }
  li.className = "task";
  li.innerHTML = `${userTask.value}
  <i class="fa-solid fa-pen-to-square"></i>
  <i class="fa-solid fa-trash"></i>`;
  ul.appendChild(li);
  userTaskValues.push({ tasks: userTask.value });
  if (userTask.value != null) {
    userTaskValues.splice(li.querySelector(".fa-pen-to-square"), 1, {
      tasks: userTask.value,
    });
    userTask.value = null;
  }

  saveData(userTaskValues);
  userTask.value = "";

  li.addEventListener("click", () => {
    li.classList.toggle("togale");
  });

  // delete function
  li.querySelector(".fa-trash").addEventListener("click", () => {
    userTaskValues.splice(li.querySelector(".fa-trash"), 1);
    li.remove();
    saveData(userTaskValues);
  });

  // Edit function
  li.querySelector(".fa-pen-to-square").addEventListener("click", () => {
    userTask.value = li.textContent;
  });
});

function saveData(userArr) {
  let strArr = JSON.stringify(userArr);
  localStorage.setItem("usersTask", strArr);
  console.log(localStorage.getItem(userTask));
}
