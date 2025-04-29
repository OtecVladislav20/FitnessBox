import { ParamsDictionary } from 'express-serve-static-core';

export type ParamUserId = {
  userId: string;
} | ParamsDictionary;
