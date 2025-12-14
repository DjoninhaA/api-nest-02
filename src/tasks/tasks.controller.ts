import { Get, Post, Controller, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Post()
  create(@Body() data: CreateTaskDTO & { userId: string }) {
    return this.taskService.create(data, data.userId);
  }
}
