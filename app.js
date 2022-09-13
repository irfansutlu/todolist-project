const content = document.querySelector("#content");
const addBtn = document.querySelector("#add-btn");
const list = document.querySelector("#myUl");

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
  }
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

let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    list.remove(li);
  };
}
