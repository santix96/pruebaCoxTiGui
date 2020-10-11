import { Component, OnInit } from '@angular/core';
import { ResidencialService } from 'src/app/services/residencialService/residencial.service';

@Component({
  selector: 'app-residential',
  templateUrl: './residential.component.html',
  styleUrls: ['./residential.component.css']
})
export class ResidentialComponent implements OnInit {
  residencesColumns: string[] = ['user_name', 'department', 'city', 'neighborhood', 'address'];
  residences: any = [];
  constructor(
    private residencialService: ResidencialService
  ) { }

  ngOnInit(): void {
    this.residencialService.getAllResidences().subscribe(
      (response) => {
        console.log(response);
        this.residences = response;
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
