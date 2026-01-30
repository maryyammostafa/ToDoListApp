import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { NewTaskComponent } from "../new-task/new-task.component";
import { UserModel } from '../../models/user.model';
import { TasksService } from '../../services/tasks.service';
import { TaskModel } from '../../models/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({required: true, alias: "currentSelectedUser"}) selectedUser !: UserModel;

  isPopUpActive: boolean = false;

  constructor(private taskService: TasksService){}

  get getTasks(): TaskModel[] {
    return this.taskService.getUserTasks(this.selectedUser.id);
  }
  togglePopUp(){
    this.isPopUpActive = !this.isPopUpActive;
  }
}
