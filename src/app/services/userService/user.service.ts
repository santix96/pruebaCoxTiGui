import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private configService: ConfigService;
  constructor(
    private Http: HttpClient
  ) {
    this.configService = new ConfigService();
  }

  createUser(userData) {
    console.log('user: ', userData);
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    });

    return this.Http.post(this.configService.serverIp.concat('/save_user'), userData, { headers });
  }
  
  getAllUsers(){
    return this.Http.get(this.configService.serverIp.concat('/all_users'));
  }
}
