import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private configService: ConfigService;
  constructor(
    private Http: HttpClient
  ) {
    this.configService = new ConfigService();
  }

  login(loginData){
    console.log('login: ',loginData);
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    });
  
    return this.Http.post(this.configService.serverIp.concat('/login'), loginData, {headers});
  
  }
}
