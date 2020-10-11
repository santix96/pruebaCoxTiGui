import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  tournamentColumns: string[] = ['id', 'tournament_name', 'init_date', 'quantity_team', 'registration_payment', 'tournament_prize'];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.
  }

}
