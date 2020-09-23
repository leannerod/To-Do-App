import { Component, OnInit } from '@angular/core';
import { todos } from './mock-todos';
import { Todo } from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}
  
    title = 'TODO List';
    todoList: Todo[] = todos;

  add() {
    console.log('clicked');
  }
}
