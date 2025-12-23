// A7. OOP + DOM (Optional)
class TodoItem {
  constructor(title, completed = false) {
    this.title = title;
    this.completed = completed;
  }

  toggle() {
    this.completed = !this.completed;
  }
}

class TodoList {
  constructor(name) {
    this.name = name;
    this.items = [];
  }

  addItem(title) {
    const item = new TodoItem(title);
    this.items.push(item);
  }

  getCompleted() {
    return this.items.filter(item => item.completed);
  }

  getPending() {
    return this.items.filter(item => !item.completed);
  }

  removeCompleted() {
    this.items = this.items.filter(item => !item.completed);
  }

  render(containerElement) {
    // Clear the container
    containerElement.innerHTML = '';

    // Create a ul element
    const ul = document.createElement('ul');

    // Add list items
    this.items.forEach(item => {
      const li = document.createElement('li');
      const checkbox = item.completed ? '[x]' : '[ ]';
      li.textContent = `${checkbox} ${item.title}`;
      ul.appendChild(li);
    });

    // Append ul to container
    containerElement.appendChild(ul);
  }
}

// Test (assuming there's a div with id 'todo-container' in HTML)
const todoList = new TodoList("My Tasks");
todoList.addItem("Learn JavaScript");
todoList.addItem("Build a project");
todoList.addItem("Review code");

todoList.items[0].toggle(); // Mark first as completed

const container = document.getElementById('todo-container');
if (container) {
  todoList.render(container);
} else {
  console.log("Container element not found. Add <div id='todo-container'></div> to HTML.");
}