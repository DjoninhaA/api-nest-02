import { Injectable } from '@nestjs/common';
import { create } from 'domain';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}
}

//   async create(data: )