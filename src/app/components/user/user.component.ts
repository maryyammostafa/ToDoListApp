import { Component, Input } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [NgClass],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({required: true, alias: "currentUser"}) user !: UserModel;

  @Input({required: true})isUserSelected: boolean = false;
}
