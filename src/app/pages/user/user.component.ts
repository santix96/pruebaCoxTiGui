import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  usersColumns: string[] = ['id', 'user_name', 'identification_number', 'cellphone_number', 'email'];
  users: any = [];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (response) => {
        console.log(response);
        this.users = response;
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
