import React from "react";

function NewTaskEl() {
  function NewTask__El() {
    const inputEl = document.getElementById("input_box");

    if (inputEl.value == ``) {
      alert("Add a task first");
    } else {
      let newTaskEl = document.createElement("input");
      newTaskEl.value = inputEl.value;
      newTaskEl.classList.add("newEl");

      let editBtn = document.createElement("button");
      editBtn.innerHTML = `Edit`;
      editBtn.classList.add("editBtn");

      let deleteBtnEl = document.createElement("button");
      deleteBtnEl.innerHTML = `Delete`;
      deleteBtnEl.classList.add("deleteBtn");

      deleteBtnEl.addEventListener("click", () => {
        document.body.removeChild(newTaskEl);
        document.body.removeChild(editBtn);
        document.body.removeChild(deleteBtnEl);
      });

      document.body.appendChild(newTaskEl);
      document.body.appendChild(editBtn);
      document.body.appendChild(deleteBtnEl);
    }
  }

  return (
    <div>
      <h2 className="heading">ToDo List</h2>
      <input
        className="inputbox"
        placeholder="Add Your Task Here"
        id="input_box"
      ></input>
      <button className="addBtn" id="add_Btn" onClick={NewTask__El}>
        Add
      </button>
    </div>
  );
}

export default NewTaskEl;
