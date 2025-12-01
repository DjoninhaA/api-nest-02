import { Task } from '../../tasks/entities/task.entity';

export interface User {
  id: number;
  email: string;
  name: string;
  task: Task;
}
