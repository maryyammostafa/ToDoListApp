import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Output() closePopUpEvent: EventEmitter<undefined> = new EventEmitter<undefined>();

  @Input({required: true}) userId !: string;

  constructor(private tasksService: TasksService){}

  fireClosePopUp(){
    this.closePopUpEvent.emit(undefined);
  }

  addTask(ele: NgForm): void{
    if(ele.invalid) return;
    this.tasksService.addTask(ele.value, this.userId);
    ele.reset();
    this.fireClosePopUp();
  }
}
