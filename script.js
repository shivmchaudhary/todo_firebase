function getItems() {
  db.collection("toto-items").onSnapshot((snapshot) => {
    let items = [];
    snapshot.docs.forEach((doc) => {
        items.push({
          id: doc.id,
          ...doc.data(),
        });
    });
    generateItems(items);
  });
}

function generateItems(items) {
  let todoItems = [];
  items.forEach((item) => {
    let todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    let checkContainer = document.createElement("div");
    checkContainer.classList.add("check");
    let checkMark = document.createElement("div");
    checkMark.classList.add("check-mark");
    checkMark.innerHTML = '<img src="assets/icon-check.svg">';
    checkMark.addEventListener("click", function () {
      markCompleted(item.id);
    });
    checkContainer.appendChild(checkMark);

    let todoText = document.createElement("div");
    todoText.classList.add("todo-text");
    todoText.innerText = item.name;

    if (item.status == "completed") {
      checkMark.classList.add("checked");
      todoText.classList.add("checked");
    }
    todoItem.appendChild(checkContainer);
    todoItem.appendChild(todoText);
    todoItems.push(todoItem);
  });
  document.querySelector(".todo-items").replaceChildren(...todoItems);
}

function addItem(event) {
  event.preventDefault();
  let text = document.getElementById("todo-input");
  let newItem = db.collection("toto-items").add({
    name: text.value,
    status: "active",
  });
  text.value = "";
}

function markCompleted(id) {
  let item = db.collection("toto-items").doc(id).delete().then(() => {
    console.log("Document successfully deleted!");
}).catch((error) => {
    console.error("Error removing document: ", error);
});
}

getItems();
