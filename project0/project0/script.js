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
  updateCounter(taskList)

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

	// Add the text to it
	let listText = document.createTextNode(taskText)
	li.appendChild(listText)

	// Add some class
	li.className = "todo-task"

	// Add a 'remove' button
	li.appendChild(addRemoveButton())

	return li
}

function updateCounter(htmlList) {
	itemCountSpan.textContent = htmlList.childElementCount.toString()
	return
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
	let li = button.parentNode
	li.remove()
	updateCounter(taskList)
	return
}

todoButton.addEventListener('click', newTodo)

todoText.addEventListener('keydown', function onEvent(e) {
	if(e.keyCode === 13) {
		newTodo()
	}
	return
})