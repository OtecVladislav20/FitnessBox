import { ParamsDictionary } from 'express-serve-static-core';

export type ParamTrainerId = {
  trainerId: string;
} | ParamsDictionary;
