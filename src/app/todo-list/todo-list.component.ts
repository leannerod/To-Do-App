import { Component, Input, OnInit } from '@angular/core';
import { todos } from './../mock-todos';
import { Todo } from './../todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor() {}

  title = 'TODO List';
  todoList: Todo[] = todos;
  newTodo: string = '';

  ngOnInit() {
    this.newTodo = '';
  }

  addTask(): void {
    const inputEl = document.getElementById('newTodo');
    const newTask = inputEl['value'].trim();
    if (newTask.length != 0) {
      this.todoList.push({
        task: newTask,
        completed: false,
      });
      inputEl['value'] = '';
    }
  }
}
