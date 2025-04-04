import { TFitnessBox } from './fitness-box.type';
import { TUser } from './user.type';

export type TReview = {
  // reviewId: string;
  userId: TUser;
  fitnessBoxId: TFitnessBox;
  score: number;
  comment: string;
}
