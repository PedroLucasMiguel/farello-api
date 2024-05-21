import {
  ConflictException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { API } from 'util/api.config';
import { LoginDto, SignupDto } from './dto';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  // localhost/auth/
  root() {
    const endpoints = API.endpoints.auth.options;

    return endpoints;
  }

  // localhost/auth/signup
  async signup(dto: SignupDto): Promise<string> {
    // Checking if theres already this email in the DB
    // if it does we raise the exception in order to avoid the increase in the ID field.
    // Maybe there is a better solution for this, but honestly, i don't care :p
    if (
      await this.prismaService.users.findFirst({ where: { email: dto.email } })
    )
      throw new ConflictException("There's already a user with this email!");

    try {
      // Hashing password
      const passhash = await argon2.hash(dto.password);

      // Creating user
      const user = await this.prismaService.users.create({
        data: { email: dto.email, passhash: passhash, username: dto.username },
      });

      // Returning user without password hash
      return `User ${user.email} created sucessfully`;
    } catch (err) {
      // TODO - WTF???
      throw new ForbiddenException(
        'Error while hashing password or creating user!',
      );
    }
  }

  // localhost/auth/login
  async login(dto: LoginDto): Promise<{ access_token: String }> {
    try {
      const user = await this.prismaService.users.findFirstOrThrow({
        where: { email: dto.email },
      });
      
      if (!(await argon2.verify(user.passhash, dto.password)))
        throw new ForbiddenException("Wrong password!")

      // Creating paylod for the access_token
      const payload = {
        sub: user.id,
        email: user.email,
        username: user.username,
      };

      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (err) {
      return err;
    }
  }
}
