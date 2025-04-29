import { ParamsDictionary } from 'express-serve-static-core';

export type ParamSessionId = {
  sessionId: string;
} | ParamsDictionary;
