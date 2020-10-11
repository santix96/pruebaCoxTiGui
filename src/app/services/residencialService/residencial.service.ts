import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResidencialService {

  private configService: ConfigService;
  constructor(
    private Http: HttpClient
  ) {
    this.configService = new ConfigService();
  }

  createResidential(residentialData){
    console.log('residential: ',residentialData);
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    });
  
    return this.Http.post(this.configService.serverIp.concat('/save_residential'), residentialData, {headers});
  
  }
  getAllResidences(){
    return this.Http.get(this.configService.serverIp.concat('/all_residences'));
  }

}
