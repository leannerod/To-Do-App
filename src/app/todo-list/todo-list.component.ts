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
  query: string = '';
originalTodo: Todo [] = this.todoList

  ngOnInit() {
    this.newTodo = '';
  }

  filterTodo() {
    if (this.query.trim() !== '') {
      let filter = this.todoList.filter((x) => 
      x.task.includes(this.query))
      this.todoList = filter
    } else {
      this.todoList = this.originalTodo
    }
  }

  removeTodo(item) {
    const index = this.todoList.findIndex((x) => x.task === item.task);
    this.todoList.splice(index, 1);
  }

  addTask(): void {
    if (this.newTodo.trim() !== '') {
      this.todoList.push( {
        task: this.newTodo,
        completed: false
      } 
      )
    }
  //   const inputEl = document.getElementById('newTodo');
  //   const newTask = inputEl['value'].trim();
  //   if (newTask.length != 0) {
  //     this.todoList.push({
  //       task: newTask,
  //       completed: false,
  //     });
  //     inputEl['value'] = '';
  //   }
  }
}
