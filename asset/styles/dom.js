// targets name and age id

document.getElementById('name-input').addEventListener('input', function () {

  // then initiate search function which targets my list
  let searchValue = this.value.toLowerCase()
  let listItems = document.getElementById('my-list').getElementsByTagName('li')

  // then we iterate over evry list
  for (let i = 0; i < listItems.length; i++) {
    let text = listItems[i].textContent.toLowerCase()
    if (text.includes(searchValue)) {
      listItems[i].style.display = 'block'
    } else {
      listItems[i].style.display = 'none'
    }
  }
})

// first call the addtolist function and
// target the  name, age and list id
function addToList () {
  let name = document.getElementById('name-input').value
  let age = document.getElementById('age-input').value
  let list = document.getElementById('my-list')

  // after add the dot create elementk,
  // which then is define with textcontent
  // to add name and age

  let listItem = document.createElement('li')
  listItem.textContent = name + '-' + age

  // then append any child item that is to be added to the listitem
  list.appendChild(listItem)
} 

// first target all class of delete buttons
let deleteButton = document.getElementsByClassName('delete-button')

// go through the buttons agian

for (let i = 0; i < deleteButton.length; i++) {
  // add a click funtion to the buttons

  deleteButton[i].addEventListener('click', function () {
    // finally add the parent node so when button is clicked, it remove a list

    this.parentNode.remove()
  })
}
