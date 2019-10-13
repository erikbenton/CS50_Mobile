const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const todoText = document.getElementById("todo-text")
const todoButton = document.getElementById("todo-button")
const taskList = document.getElementById("todo-list")


function newTodo() {

  let task = document.getElementById("todo-text")

  // Check if there is actually any text in the input
  if(task.value.length < 1) {
  	alert("You must enter a task into the text field")
  	return
  }

  addTaskToList(taskList, task.value)
  updateItemCount(taskList)

  task.value = ""
  return
}

function addTaskToList(htmlList, taskText) {
  htmlList.appendChild(createTodoItem(taskText))
  return
}

function createTodoItem(taskText) {
	// First create the list element
	const li = document.createElement("li")
	
	// Add some class
	li.className = "todo-task"

	// Create a "left-side" for the text
	const divLeft = document.createElement("div")
	divLeft.className = "left-side"

	// Add the text to it
	let divText = document.createTextNode(taskText)
	divLeft.appendChild(divText)

	li.appendChild(divLeft)

	// Create a "right-side" for the text
	const divRight = document.createElement("div")
	divRight.className = "right-side"

	// Add a Completed checkbox
	divRight.appendChild(addCompletedCheckbox())
	divRight.appendChild(addCompletedLabel())

	// Add a 'remove' button
	divRight.appendChild(addRemoveButton())

	li.appendChild(divRight)

	return li
}

function updateItemCount(htmlList) {
	itemCountSpan.textContent = htmlList.childElementCount.toString()
	updateUncheckedCount()
	return
}

function updateUncheckedCount() {
  let checkboxes = document.getElementsByClassName("completed-checkbox")
  let numUnchecked = 0
  for( let i = 0; i < checkboxes.length; i++) {
    if(!checkboxes[i].checked) {
    	numUnchecked++
    }
  }
  uncheckedCountSpan.textContent = numUnchecked.toString()
  return
}

function addCompletedCheckbox() {
  const completedCheckbox = document.createElement("input")
  completedCheckbox.type = "checkbox"
  completedCheckbox.name = "completed"
  completedCheckbox.value = "completed"
  completedCheckbox.onclick = updateUncheckedCount
  completedCheckbox.className = "completed-checkbox"
  return completedCheckbox
}

function addCompletedLabel() {
  const completedLabel = document.createElement("label")
  completedLabel.for = "completed"
  completedLabel.className = "completed-label"
  let completedText = document.createTextNode("Done")
  completedLabel.appendChild(completedText)
  return completedLabel
}

function addRemoveButton() {
  const removeButton = document.createElement("button")
  let buttonText = document.createTextNode("X")
  removeButton.onclick = removeTaskFromList
  removeButton.className = "remove-button"
  removeButton.appendChild(buttonText)
  return removeButton
}

function removeTaskFromList(e) {
	let button = e.target
	let li = button.closest("li")
	li.remove()
	updateItemCount(taskList)
	return
}

todoButton.addEventListener('click', newTodo)

todoText.addEventListener('keydown', function onEvent(e) {
	if(e.keyCode === 13) {
		newTodo()
	}
	return
})