import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { todos } from './../mock-todos';
import { Todo } from './../todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todoItem;
  @Output() remove = new EventEmitter<void>();
  isNotCompleted: boolean = true;
  todoList: [];

  constructor() {}

  ngOnInit(): void {
    this.isNotCompleted = !this.todoItem.completed;
  }

completeTask(): void {
  this.todoItem.completed = true;
}
  
  removeTask(item): void {
    this.remove.emit(item);
  }

}




