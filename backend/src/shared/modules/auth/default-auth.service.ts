import { inject, injectable } from 'inversify';
import * as crypto from 'node:crypto';
import { SignJWT } from 'jose';
import { AuthService } from './auth-service.interface.js';
import { JWT_ALGORITHM, JWT_EXPIRED } from './auth.constant.js';
import { Component } from '../../types/component.enum.js';
import { UserService } from '../user/user-service.interface.js';
import { Logger } from '../../libs/logger/logger.interface.js';
import { RestSchema } from '../../libs/config/rest.schema.js';
import { Config } from '../../libs/config/config.interface.js';
import { UserEntity } from '../user/user.entity.js';
import { LoginUserDto } from '../user/dto/login-user.dto.js';
import { TokenPayload } from './types/TokenPayload.js';
import { UserNotFoundException } from './errors/user-not-found.exception.js';
import { UserPasswordIncorrectException } from './errors/user-password-incorrect.exception.js';


@injectable()
export class DefaultAuthService implements AuthService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.UserService) private readonly userService: UserService,
    @inject(Component.Config) private readonly config: Config<RestSchema>,
  ) {}

  public async authenticate(user: UserEntity): Promise<string> {
    const jwtSecret = this.config.get('JWT_SECRET');
    const secretKey = crypto.createSecretKey(jwtSecret, 'utf-8');
    const tokenPayload: TokenPayload = {
      mail: user.mail,
      id: user.id,
    };

    this.logger.info(`Create token for ${user.mail}`);
    return new SignJWT(tokenPayload)
      .setProtectedHeader({ alg: JWT_ALGORITHM })
      .setIssuedAt()
      .setExpirationTime(JWT_EXPIRED)
      .sign(secretKey);
  }

  public async verify(dto: LoginUserDto): Promise<UserEntity> {
    const user = await this.userService.findByEmail(dto.mail);
    if (! user) {
      this.logger.warn(`User with ${dto.mail} not found`);
      throw new UserNotFoundException();
    }

    if (! user.verifyPassword(dto.password, this.config.get('SALT'))) {
      this.logger.warn(`Incorrect password for ${dto.mail}`);
      throw new UserPasswordIncorrectException();
    }

    return user;
  }
}
