import { Module, SetMetadata } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { BoardModule } from './board/board.module';

@Module({
  imports: [PrismaModule, AuthModule, BoardModule],
  controllers: [AppController],
  providers: [AppService,{ provide: APP_GUARD, useClass: AuthGuard }]
})
export class AppModule {}
