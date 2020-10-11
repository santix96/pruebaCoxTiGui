import { Component, OnInit } from '@angular/core';
import { FinancialService } from 'src/app/services/financialService/financial.service';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {
  financialColumns: string[] = ['user_name', 'salary', 'other_income', 'monthly_expenses', 'financial_expenses'];
  financials: any = [];
  constructor(
    private financialService: FinancialService
  ) { }
  ngOnInit(): void {
    this.financialService.getAllFinancials().subscribe(
      (response) => {
        console.log(response);
        this.financials = response;
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
