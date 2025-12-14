import { Injectable } from '@nestjs/common';
import { create } from 'domain';
import { PrismaService } from 'src/db/prisma.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

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

  async findAll() {
    return this.prisma.task.findMany();
  }

  async findOne(id: string) {
    return this.prisma.task.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: UpdateTaskDto) {
    return this.prisma.task.update({
      where: { id },
      data: {
        title: data.title,
        content: data.content,
        status: data.status,
      },
    });
  }

  async delete(id: string) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
