// targets name and age id

document.getElementById("name-input").addEventListener("input", function () {
    // then initiate search function which targets my list
    const searchValue = this.value.toLowerCase()
    const listItems = document
      .getElementById("my-list")
      .getElementsByTagName("li")
  
    // then we iterate over every list
    for (let i = 0; i < listItems.length; i++) {
      const text = listItems[i].textContent.toLowerCase()
      if (text.includes(searchValue)) {
        listItems[i].style.display = "block"
      } else {
        listItems[i].style.display = "none"
      }
    }
  })
  
  // first call the addtolist function and
  // target the  name, age and list id
  function addToList() {
    const name = document.getElementById("name-input").value.trim()
    const age = document.getElementById("age-input").value.trim()
    const list = document.getElementById("my-list")
  
    // after add the dot create element,
    // which then is defined with textContent
    // to add name and age
  
    const listItem = document.createElement("li")
    listItem.textContent = name + "-" + age
  
    // then append any child item that is to be added to the listItem
    list.appendChild(listItem)
  }
  
  addToList()
  
  // first target all class of delete buttons
  const deleteButton = document.getElementsByClassName("delete-button")
  
  // go through the buttons again
  for (let i = 0; i < deleteButton.length; i++) {
    // add a click function to the buttons
    deleteButton[i].addEventListener("click", function () {
      // finally add the parent node so when button is clicked, it removes a list
      this.parentNode.remove()
    });
  }
  
