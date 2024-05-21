import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { API } from 'util/api.config';
import { LoginDto, SignupDto } from './dto';

@Controller(API.endpoints.auth.path)
export class AuthController {
  
  constructor(private service: AuthService) {}

  @Get() // localhost/auth/
  root() {
    return this.service.root();
  }

  @Post(API.endpoints.auth.options.signup.path)
  signup(@Body() dto: SignupDto) {
    return this.service.signup(dto);
  }

  @Post(API.endpoints.auth.options.login.path)
  signin(@Body() dto: LoginDto) {
    return this.service.login(dto)
  }
}
