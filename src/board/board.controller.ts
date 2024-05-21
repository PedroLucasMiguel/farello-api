import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { BoardService } from './board.service';
import { Request } from 'express';
import { API } from 'util/api.config';
import { CreateBoardDto, CreateGroupDto, CreateNoteDto } from './dto/board.dto';

const enum ITEMS {
  board = 'board',
  group = 'group',
  item = 'item',
}

@Controller(API.endpoints.board.path)
export class BoardController {
  constructor(private service: BoardService) {}

  @Post(API.endpoints.board.options.create.path)
  create(
    @Param('item') item: string,
    @Body() dto: CreateBoardDto | CreateGroupDto | CreateNoteDto,
    @Req() context: Request,
  ) {

    const userId = context['user']['id']

    switch(item){
      case ITEMS.board:
        return this.service.createBoard(userId, dto as CreateBoardDto)
      case ITEMS.group:
        // TODO - WHY ARE U A INTEGER?????????????
        console.log(typeof (dto as CreateGroupDto).boardId)
        return this.service.createGroup(userId, dto as CreateGroupDto)
    }
  }

  @Get('sample')
  samplePage(@Req() context: Request) {
    return this.service.samplePage(context);
  }
}
