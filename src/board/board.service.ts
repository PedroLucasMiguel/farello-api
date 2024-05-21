import { ForbiddenException, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBoardDto, CreateGroupDto } from './dto';


@Injectable()
export class BoardService {
  constructor(private prisma: PrismaService) {}

  async createBoard(userId: number, dto: CreateBoardDto) {
    // Getting the user (we can safely assume that the user exists by the tws token)
    const user = await this.prisma.users.findFirst({ where: { id: userId } });

    // Create the board
    try {
      const board = await this.prisma.boards.create({
        data: {
          title: dto.title,
          user: { connect: { id: user.id } },
        },
      });
      return `Board ${board.title} create sucssefully!`;
    } catch (err) {
      throw err;
    }
  }

  async createGroup(userId: number, dto: CreateGroupDto) {
    // Getting the user and Board from DB
    const user = await this.prisma.users.findFirstOrThrow({
      where: { id: userId },
    });
    const board = await this.prisma.boards.findFirstOrThrow({
      where: { id: dto.boardId as number },
    });

    // Checking if the user does have the rights to create the group in the board
    if (board.userId != user.id && user.role != 'Administrator')
      throw new ForbiddenException(
        'Your user does not have permission to create a group in this board',
      );

    // Create the group
    try {
      const group = await this.prisma.groups.create({
        data: {
          title: dto.title,
          board: { connect: { id: board.id as number } },
        },
      });
      return `Group ${group.title} create sucssefully!`;
    } catch (err) {
      throw err;
    }
  }

  async samplePage(context: Request) {
    return await this.prisma.users.findFirst({
      where: { id: context['user']['sub'] },
    });
  }
}
