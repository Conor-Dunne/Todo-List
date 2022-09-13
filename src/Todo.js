export default class toDoItem {
  constructor(title, details, dueDate, priority) {
    this.title = title;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = Math.floor(Math.random() * 1000000);
  }
}
