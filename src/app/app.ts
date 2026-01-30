import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/user/user.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { UsersService } from './services/users.service';
import { UserModel } from './models/user.model';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users !: UserModel[];
  selectedUser : UserModel | null = null;

  constructor(private userServices: UsersService){
    this.users = userServices.getUsers();
  }

  selectUser(user: UserModel){
    this.selectedUser = user;
  }
}
