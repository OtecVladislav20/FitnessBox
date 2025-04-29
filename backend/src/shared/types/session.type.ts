import { TFitnessBox } from './fitness-box.type.js';
import { TTrainer } from './trainer.type.js';
import { TUser } from './user.type.js';


export type TSessions = {
  // sessionId: string;
  fitnessBoxId: TFitnessBox;
  userId: TUser;
  trainerId: TTrainer | undefined;
  acceptWorkout: boolean;
  friend: boolean;
  date: string;
  hour: string;
}

