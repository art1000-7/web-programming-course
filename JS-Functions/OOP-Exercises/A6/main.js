// A6. Simple Domain Model: Todo List
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
}

// Test
const todoList = new TodoList("My Tasks");

todoList.addItem("Learn JavaScript");
todoList.addItem("Build a project");
todoList.addItem("Review code");

todoList.items[0].toggle(); // Mark first as completed
todoList.items[2].toggle(); // Mark third as completed

console.log("Completed:", todoList.getCompleted().map(item => item.title));
console.log("Pending:", todoList.getPending().map(item => item.title));

todoList.removeCompleted();
console.log("After removing completed - Pending:", todoList.getPending().map(item => item.title));