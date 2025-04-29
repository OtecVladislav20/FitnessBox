import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import { fillDTO } from '../../helpers/common.js';
import { BaseController } from '../../libs/rest/controller/base-controller.abstract.js';
import { Logger } from '../../libs/logger/logger.interface.js';
import { Component } from '../../types/component.enum.js';
import { HttpMethod } from '../../libs/rest/types/http-method.enum.js';
import { SessionService } from './session-service.interface.js';
import { SessionRdo } from './rdo/session.rdo.js';
import { ParamSessionId } from './type/param-session-id.type.js';
import { ParamFitnessBoxId } from '../fitness-box/type/param-fitness-box-id.type.js';
import { ParamUserId } from '../user/type/param-user-id.type.js';
import { HttpError } from '../../libs/rest/errors/http-error.js';
import { StatusCodes } from 'http-status-codes';
import { CreateSessionRequest } from './create-session-request.type.js';


@injectable()
export class SessionController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.SessionService) private readonly sessionService: SessionService,
  ) {
    super(logger);

    this.logger.info('Register routes for SessionController…');

    this.addRoute({ path: '/', method: HttpMethod.Get, handler: this.index });
    this.addRoute({ path: '/:sessionId', method: HttpMethod.Get, handler: this.show });
    this.addRoute({ path: '/fitness-boxes/:fitnessBoxId', method: HttpMethod.Get, handler: this.showAllFitnessBoxSessions });
    this.addRoute({ path: '/users/:userId', method: HttpMethod.Get, handler: this.showAllUserSessions });
    this.addRoute({ path: '/register', method: HttpMethod.Post, handler: this.create });
    this.addRoute({ path: '/register-all', method: HttpMethod.Post, handler: this.createAll });
  }

  public async index(_req: Request, res: Response): Promise<void> {
    const session = await this.sessionService.find();
    const responseData = fillDTO(SessionRdo, session);
    this.ok(res, responseData);
  }

  public async show({ params }: Request<ParamSessionId>, res: Response): Promise<void> {
    const { sessionId } = params;
    const session = await this.sessionService.findById(sessionId);
    this.ok(res, fillDTO(SessionRdo, session));
  }

  public async showAllFitnessBoxSessions({ params }: Request<ParamFitnessBoxId>, res: Response): Promise<void> {
    const { fitnessBoxId } = params;
    const sessions = await this.sessionService.findByFitnessBoxId(fitnessBoxId);
    this.ok(res, fillDTO(SessionRdo, sessions));
  }

  public async showAllUserSessions({ params}: Request<ParamUserId>, res: Response): Promise<void> {
    const { userId } = params;
    const sessions = await this.sessionService.findByUserId(userId);
    this.ok(res, fillDTO(SessionRdo, sessions));
  }

  public async create(
    { body }: CreateSessionRequest,
    res: Response,
  ): Promise<void> {
    const existsSession = await this.sessionService.findByDate(body.date, body.hour);

    if (existsSession) {
      throw new HttpError(
        StatusCodes.CONFLICT,
        `Session with date «${body.date}» and hour «${body.hour}» exists.`,
        'SessionController'
      );
    }

    const result = await this.sessionService.create(body);
    this.created(res, fillDTO(SessionRdo, result));
  }

  public async createAll(
    { body }: CreateSessionRequest,
    res: Response,
  ): Promise<void> {
    const existsSession = await this.sessionService.findByDate(body.date, body.hour);

    if (existsSession) {
      throw new HttpError(
        StatusCodes.CONFLICT,
        `Session with date «${body.date}» and hour «${body.hour}» exists.`,
        'SessionController'
      );
    }

    const result = await this.sessionService.create(body);
    this.created(res, fillDTO(SessionRdo, result));
  }
}
