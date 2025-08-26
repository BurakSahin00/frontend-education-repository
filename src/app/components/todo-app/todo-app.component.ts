import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-todo-app",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./todo-app.component.html",
  styleUrls: ["./todo-app.component.css"],
})

export class TodoAppComponent {
  constructor(public todoService: TodoService) {}
}

