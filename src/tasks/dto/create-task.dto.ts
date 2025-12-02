import { TaskStatus } from '../entities/task.entity';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  content?: string;

  @IsEnum(TaskStatus)
  status: TaskStatus;
}
