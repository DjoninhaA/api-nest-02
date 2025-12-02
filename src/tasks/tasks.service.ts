import { Injectable } from '@nestjs/common';
import { create } from 'domain';
import { PrismaService } from 'src/db/prisma.service';
import { CreateTaskDTO } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTaskDTO, userId: string) {
    return this.prisma.task.create({
      data: {
        title: data.title,
        content: data.content || '',
        status: data.status,
        authorId: userId,
      },
    });
  }
}
