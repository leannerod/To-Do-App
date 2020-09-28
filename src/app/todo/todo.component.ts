import { Component, OnInit, Input } from '@angular/core';
import { todos } from './../mock-todos';
import { Todo } from './../todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todoItem;
  isNotCompleted: boolean = true;
  todoList: [];

  constructor() {}

  ngOnInit(): void {
    this.isNotCompleted = !this.todoItem.completed;
  }

  // removeTask(): void {
  //  this.todoList.task($key);
  //   }        

  completeTask(): void {
    this.isNotCompleted = this.todoList.completed;
  }
}




