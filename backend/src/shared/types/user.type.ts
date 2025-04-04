import { TFitnessBox } from './fitness-box.type.js';


export type TUser = {
  // userId: string;
  name: string;
  bithDate: string;
  password: string;
  phone: string;
  mail: string;
  balance: number;
  subscribe: boolean;
  subscribeEnd: string;
  // favouriteFitnessBoxId: string[];
  // favouriteFitnessBoxId: TFitnessBox[];
  notification: string[];
}
