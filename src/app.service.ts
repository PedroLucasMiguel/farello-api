import { Injectable } from '@nestjs/common';
import { API } from 'util/api.config';

@Injectable()
export class AppService {
  constructor() {}

  // /
  endpoints() {
    return API.endpoints;
  }
}
