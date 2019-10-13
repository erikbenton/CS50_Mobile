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

function newTodo() {
  let task = document.getElementById("todo-text")

  // Check if there is actually any text in the input
  if(task.value.length < 1) {
  	alert("You must enter a task into the text field")
  	return
  }

  // Get the list object
  let ul = document.getElementById('todo-list')

  addTaskToList(ul, task.value)

  task.value = ""
  return
}

function addTaskToList(htmlList, taskText) {
  // Create a node for the list with the text from the prompt
  let li = document.createElement("li")

  // Append it to the list node and list
  li.appendChild(document.createTextNode(taskText))
  htmlList.appendChild(li)
  return
}

todoText.addEventListener('keydown', function onEvent(e) {
	if(e.keyCode === 13) {
		newTodo()
	}
	return
})
