document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("input");
  const addButton = document.getElementById("add");
  const taskList = document.getElementById("tasks");

  addButton.addEventListener("click", function (e) {
      e.preventDefault();
      addTask();
  });

  document.getElementById("container").addEventListener("submit", function (e) {
      e.preventDefault();
      addTask();
  });

  function addTask() {
      const taskText = inputField.value.trim();
      if (taskText !== "") {
          const taskItem = document.createElement("div");
          taskItem.classList.add("task");
          taskItem.innerHTML = `
              <input type="text" class="checked" value="${taskText}" readonly/>
              <div class="actions">
                  <button class="edit">Edit</button>
                  <button class="delete">Delete</button>
              </div>
          `;

          taskList.appendChild(taskItem);

          inputField.value = "";

          const editButton = taskItem.querySelector(".edit");
          const deleteButton = taskItem.querySelector(".delete");
          const taskTextElement = taskItem.querySelector(".checked");

          editButton.addEventListener("click", function () {
              taskTextElement.removeAttribute("readonly");
              taskTextElement.focus();
          });

          taskTextElement.addEventListener("blur", function () {
              taskTextElement.setAttribute("readonly", "true");
          });

          deleteButton.addEventListener("click", function () {
              taskItem.remove();
          });
      }
  }
});
