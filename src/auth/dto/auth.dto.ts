import { IsEmail, Length } from 'class-validator';

export class SignupDto {
  @IsEmail()
  email: string;

  @Length(6, 64, {
    message: 'Password must have a size of 6 to 64 characters!',
  })
  password: string;

  @Length(4, 70, {
    message: 'Username must have at least 4 to a maximum of 70 characters!',
  })
  username: string;
}

export class LoginDto {
  @IsEmail()
  email: string;

  @Length(1, 64, {
    message: 'Invalid Password'
  })
  password: string;
}

export class LogoutDto {}
