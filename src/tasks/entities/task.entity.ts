import { User } from '../../users/entities/user.entity';

export interface Task {
  id: number;
  title: string;
  content: string;
  status: TaskStatus;
  authorId: number;
  author?: User;
}

export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
