import { TokenPayload } from './src/shared/modules/auth/types/TokenPayload.js';

declare module 'express-serve-static-core' {
  export interface Request {
    tokenPayload: TokenPayload;
  }
}
