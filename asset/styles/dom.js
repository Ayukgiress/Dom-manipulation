// targets name and age id
document.getElementById("name-input").addEventListener("input", function () {
  //then initiate search function which targets my list
  var searchValue = this.value.toLowerCase();
  var listItems = document.getElementById("my-list").getElementsByTagName("li");

  //then we iterate over evry list
  for (var i = 0; i < listItems.length; i++) {
    var text = listItems[i].textContent.toLowerCase();
    if (text.includes(searchValue)) {
      listItems[i].style.display = "block";
    } else {
      listItems[i].style.display = "none";
    }
  }
});

//first call the addtolist function and
//target the  name, age and list id
function addToList() {
  var name = document.getElementById("name-input").value;
  var age = document.getElementById("age-input").value;
  var list = document.getElementById("my-list");

  //after add the dot create element
  //which then is define with textcontent
  //to add name and age
  var listItem = document.createElement("li");
  listItem.textContent = name + "-" + age;

  //then append any child item that is to be added to the listitem
  list.appendChild(listItem);
}
//first target all class of delete buttons
var deleteButton = document.getElementsByClassName("delete-button");

//go through the buttons agian

for (var i = 0; i < deleteButton.length; i++) {
  //add a click funtion to the buttons

  deleteButton[i].addEventListener("click", function () {
    //finally add the parent node so when button is clicked, it remove a list

    this.parentNode.remove();
  });
}
