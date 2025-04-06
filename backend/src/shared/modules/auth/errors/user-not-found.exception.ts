import { StatusCodes } from 'http-status-codes';
import { BaseAuthException } from './base-auth.exception.js';


export class UserNotFoundException extends BaseAuthException {
  constructor() {
    super(StatusCodes.NOT_FOUND, 'User not found');
  }
}
