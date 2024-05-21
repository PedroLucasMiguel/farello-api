import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { API } from 'util/api.config';
import { LoginDto, SignupDto } from './dto';
import { Public } from 'util/api.decoretors';


@Controller(API.endpoints.auth.path)
export class AuthController {
  constructor(private service: AuthService) {}

  @Public()
  @Get() // localhost/auth/
  root() {
    return this.service.root();
  }

  @Public()
  @Post(API.endpoints.auth.options.signup.path)
  signup(@Body() dto: SignupDto) {
    return this.service.signup(dto);
  }
  
  @Public()
  @Get(API.endpoints.auth.options.login.path)
  signin(@Body() dto: LoginDto) {
    return this.service.login(dto);
  }
}
