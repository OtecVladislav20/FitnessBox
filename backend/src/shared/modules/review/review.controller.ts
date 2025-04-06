import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import { fillDTO } from '../../helpers/common.js';
import { BaseController } from '../../libs/rest/controller/base-controller.abstract.js';
import { Logger } from '../../libs/logger/logger.interface.js';
import { ReviewService } from './review-service.interface.js';
import { Component } from '../../types/component.enum.js';
import { HttpMethod } from '../../libs/rest/types/http-method.enum.js';
import { ReviewRdo } from './rdo/review.rdo.js';
import { CreateReviewDto } from './dto/create-review.dto.js';
import { PrivateRouteMiddleware } from '../../libs/rest/middleware/private-route.middleware.js';


@injectable()
export class ReviewController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.ReviewService) private readonly reviewService: ReviewService,
  ) {
    super(logger);

    this.logger.info('Register routes for ReviewController…');

    this.addRoute({ path: '/', method: HttpMethod.Get, handler: this.index });
    this.addRoute({
      path: '/',
      method: HttpMethod.Post,
      handler: this.create,
      middlewares: [
        new PrivateRouteMiddleware()
      ]
    });
  }

  public async index(_req: Request, res: Response): Promise<void> {
    const review = await this.reviewService.find();
    const responseData = fillDTO(ReviewRdo, review);
    this.ok(res, responseData);
  }

  public async create(
    { body, tokenPayload }: Request<Record<string, unknown>, Record<string, unknown>, CreateReviewDto>,
    res: Response
  ): Promise<void> {
    const result = await this.reviewService.create({...body, userId: tokenPayload.id});
    this.created(res, fillDTO(ReviewRdo, result));
  }
}
