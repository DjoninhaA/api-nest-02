import { TaskStatus } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsString()
  content?: string;

  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
