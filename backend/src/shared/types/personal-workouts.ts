import { TTrainer } from './trainer.type';
import { TUser } from './user.type';

export type TPersonalWorkouts = {
  // personalWorkoutId: string;
  trainerId: TTrainer;
  userId: TUser;
  countWorkout: number;
}
