import { Injectable } from '@angular/core';
import { TaskInfoModel, TaskModel } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks : TaskModel[] = [];

  constructor(){
    let stored = localStorage.getItem("tasks") ?? JSON.stringify([]);
    this.tasks = JSON.parse(stored);
    this.updateLocalSTorage();
  }

  getUserTasks(userId: string): TaskModel[]{
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskInfo: TaskInfoModel, userId: string){
    let newTask: TaskModel = {id: new Date().getTime().toString(), userId: userId, ...taskInfo}
    this.tasks.push(newTask);
    this.updateLocalSTorage();
  }

  completeTask(taskId: string){
    this.tasks = this.tasks.filter((task) => task.id != taskId);
    this.updateLocalSTorage();
  }

  private updateLocalSTorage(){
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
