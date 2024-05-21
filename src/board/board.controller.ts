import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { BoardService } from './board.service';
import { Request } from 'express';
import { API } from 'util/api.config';
import { CreateBoardDto, CreateGroupDto, CreateNoteDto } from './dto';

@Controller(API.endpoints.board.path)
export class BoardController {
  constructor(private service: BoardService) {}

  @Post(API.endpoints.board.options.create_board.path)
  create_board(@Req() context: Request, @Body() dto: CreateBoardDto) {
    const userId = context['user']['id'];

    return this.service.createBoard(userId, dto);
  }

  @Post(API.endpoints.board.options.create_group.path)
  create_group(@Req() context: Request, @Body() dto: CreateGroupDto) {
    const userId = context['user']['id'];

    return this.service.createGroup(userId, dto);
  }

  @Get('sample')
  samplePage(@Req() context: Request) {
    return this.service.samplePage(context);
  }
}
