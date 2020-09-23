import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todoItem;
  isNotCompleted: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.isNotCompleted = !this.todoItem.completed;
  }

}
