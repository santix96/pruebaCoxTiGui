import {Injectable} from '@angular/core';

@Injectable()

export class ConfigService {
 serverIp = 'http://localhost:3333/api';
  constructor() {
  }
}