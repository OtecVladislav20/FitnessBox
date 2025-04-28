import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import { fillDTO } from '../../helpers/common.js';
import { BaseController } from '../../libs/rest/controller/base-controller.abstract.js';
import { Logger } from '../../libs/logger/logger.interface.js';
import { Component } from '../../types/component.enum.js';
import { HttpMethod } from '../../libs/rest/types/http-method.enum.js';
import { PrivateRouteMiddleware } from '../../libs/rest/middleware/private-route.middleware.js';
import { FitnessBoxService } from './fitness-box.interface.js';
import { FitnessBoxRdo } from './rdo/fitness-box.rdo.js';
import { ParamFitnessBoxId } from './type/param-fitness-box-id.type.js';


@injectable()
export class FitnessBoxController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.FitnessBoxService) private readonly fitnessBoxService: FitnessBoxService,
  ) {
    super(logger);

    this.logger.info('Register routes for FitnessBoxController…');

    this.addRoute({ path: '/', method: HttpMethod.Get, handler: this.index });
    this.addRoute({
      path: '/:fitnessBoxId',
      method: HttpMethod.Get,
      handler: this.show,
      // middlewares: [
      //   new PrivateRouteMiddleware()
      // ]
    });
  }

  public async index(_req: Request, res: Response): Promise<void> {
    const fitnessBox = await this.fitnessBoxService.find();
    const responseData = fillDTO(FitnessBoxRdo, fitnessBox);
    this.ok(res, responseData);
  }

  public async show({ params }: Request<ParamFitnessBoxId>, res: Response): Promise<void> {
    const { fitnessBoxId } = params;
    const fitnessBox = await this.fitnessBoxService.findById(fitnessBoxId);
    this.ok(res, fillDTO(FitnessBoxRdo, fitnessBox));
  }
}
