import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService] // Exporting the prisma service globally :P
})
export class PrismaModule {}
