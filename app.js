const content = document.querySelector("#content");
const addBtn = document.querySelector("#add-btn");
const list = document.querySelector("#myUl");

window.addEventListener("load", () => {
  content.focus();
});

//add event
addBtn.addEventListener("click", () => {
  if (!content.value) {
    alert("Please enter title");
  } else {
    const li = document.createElement("li");
    list.appendChild(li);
    li.innerText = content.value;
    content.value = "";

    let span = document.createElement("SPAN");

    li.appendChild(span);
    span.className = "close";
    span.innerText = "\u00D7";

    deleteBtn = document.querySelectorAll(".close");
    for (let i = 0; i < deleteBtn.length; i++) {
      deleteBtn[i].addEventListener("click", deleteEvent);
    }
  }
  content.focus();
});

content.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    addBtn.click();
  }
});

//checked event
list.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  },
  false
);

//delete event
function deleteEvent() {
  let selected = confirm("Are you sure?");
  if (selected == true) {
    // eğer onaylanırsa tıklanan i değişkeninin üst etiketi silinsin
    let removeElement = this.parentElement;
    removeElement.remove();
  }
}
