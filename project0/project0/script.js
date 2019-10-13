const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  let task = prompt('What is your new "todo" task?')

  // Get teh list object
  let ul = document.getElementById('todo-list')

  // Create a node for the list with the text from the prompt
  let li = document.createElement("li")

  // Append it to the list node and list
  li.appendChild(document.createTextNode(task))
  ul.appendChild(li)

}
