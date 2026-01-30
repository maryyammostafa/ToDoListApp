import { Component, Input, input } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { TaskModel } from '../../models/task.model';
import { required } from '@angular/forms/signals';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({required: true}) task !: TaskModel;
  constructor(private tasksService: TasksService){}

  doneTask(): void{
    this.tasksService.completeTask(this.task.id);
  }
}
