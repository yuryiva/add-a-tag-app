let checkbox = document.getElementById("checkbox");
let addButton = document.getElementById("addItem");
let functionality = document.getElementById("functionality");

const enable = () => {
  let allButtons = [...document.getElementsByTagName("button")];
  functionality.innerHTML = "ENABLED";
  allButtons.map((el) => el.removeAttribute("disabled"));
};

const disable = () => {
  let allButtons = [...document.getElementsByTagName("button")];
  allButtons.map((el) => el.setAttribute("disabled", true));
  functionality.innerHTML = "DISABLED";
};

const changeCheckboxState = () => {
  if (checkbox.checked) {
    localStorage.setItem("checkbox", true);
    enable();
  } else {
    localStorage.setItem("checkbox", false);
    disable();
  }
};

window.addEventListener("load", () => {
  if (localStorage.checkbox === "true") {
    checkbox.setAttribute("checked", true);
    enable();
  } else {
    disable();
  }
});

const createTag = () => {
  const newTag = document.createElement("div");
  newTag.innerHTML = document.getElementById("input").value;
  newTag.className = "component";

  const delButton = document.createElement("button");
  delButton.innerHTML = "&#10008";
  delButton.className = "delButton";

  if (newTag.innerHTML != "") {
    delButton.onclick = removeTag;
    document.getElementById("list").appendChild(newTag).append(delButton);
    document.getElementById("input").value = "";
    saveListOfTags();
  } else {
    alert("PLEASE INSERT TEXT");
  }
};

function removeTag() {
  this.parentElement.remove();
  saveListOfTags();
}

const saveListOfTags = () => {
  localStorage.storedListOfTags = document.getElementById("list").innerHTML;
};

const loadListOfTags = () => {
  document.getElementById("list").innerHTML = localStorage.storedListOfTags;
  for (let i = 0; i < list.children.length; i++) {
    list.children[i].children[0].onclick = removeTag;
  }
};

if (localStorage.storedListOfTags) {
  loadListOfTags();
}
