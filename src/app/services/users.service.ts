import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: UserModel[] = [
    {id: "u1", name: "Mohamed Atya", avatar: "user1.avif"},
    {id: "u2", name: "Sarah Ahmed", avatar: "user2.avif"},
    {id: "u3", name: "Omar Khaled", avatar: "user3.avif"},
    {id: "u4", name: "Sama Mohamed", avatar: "user4.avif"},
    {id: "u5", name: "Aliaa El-Sayed", avatar: "user5.avif"},
    {id: "u6", name: "Ahmed Mohamed", avatar: "user6.avif"}
  ];

  getUsers(): UserModel[]{
    return this.users;
  }
}
