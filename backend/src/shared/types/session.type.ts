import { TFitnessBox } from './fitness-box.type';
import { TTrainer } from './trainer.type';
import { TUser } from './user.type';

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

