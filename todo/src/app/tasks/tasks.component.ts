import { Component, OnInit } from '@angular/core';
import { Task } from '../tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  task: Task = {
    id: 1,
    title:'sortir le macron',
    content: 'dégager ce fdp',
    done: true
  };

  constructor() { }

  ngOnInit() {
  }

}
