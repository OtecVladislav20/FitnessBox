import { TFitnessBox } from './fitness-box.type.js';
import { TTrainer } from './trainer.type.js';
import { TUser } from './user.type.js';

export type TTime = {
  date: string;
  hour: string;
}

export type TSessions = {
  // sessionId: string;
  boxId: TFitnessBox;
  userId: TUser;
  trainerId: TTrainer | undefined;
  acceptWorkout: boolean;
  time: TTime;
  friend: boolean;
}

