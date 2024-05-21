import { IsHexColor, Length } from 'class-validator';

export class CreateBoardDto {
  @Length(1, 32, {
    message: 'Board name must be between 1 to 32 characters long!',
  })
  title: string;
  status?: string[];
}

export class CreateGroupDto {
  @Length(1, 32, {
    message: 'Group name must be between 1 to 32 characters long!',
  })
  title: string;

  
  boardId: number;
}

export class CreateNoteDto {
  @Length(1, 32, {
    message: 'Note title must be between 1 to 32 characters long!',
  })
  title: string;

  @Length(1, 512, {
    message: 'Note description must be between 1 to 512 characters long!',
  })
  description?: string;

  @IsHexColor()
  color?: string;
}
