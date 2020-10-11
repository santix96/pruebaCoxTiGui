import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinancialService {
  private configService: ConfigService;
  constructor(
    private Http: HttpClient
  ) {
    this.configService = new ConfigService();
  }

  createFinancial(financialData){

    console.log('financial: ',financialData);
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    });
  
    return this.Http.post(this.configService.serverIp.concat('/save_financial'), financialData, {headers});
  
  }
  getAllFinancials(){
    return this.Http.get(this.configService.serverIp.concat('/all_financials'));
  }
}
