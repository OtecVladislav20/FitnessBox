import { inject, injectable } from 'inversify';
import { DocumentType, types } from '@typegoose/typegoose';
import { ReviewService } from './review-service.interface.js';
import { Component } from '../../types/component.enum.js';
import { CreateReviewDto } from './dto/create-review.dto.js';
import { ReviewEntity } from './review.entity';

@injectable()
export class DefaultReviewService implements ReviewService {
  constructor(
    @inject(Component.ReviewModel) private readonly reviewModel: types.ModelType<ReviewEntity>
  ) {}

  public async create(dto: CreateReviewDto): Promise<DocumentType<ReviewEntity>> {
    const comment = await this.reviewModel.create(dto);
    return comment.populate('userId');
  }

  public async findByReviewId(reviewId: string): Promise<DocumentType<ReviewEntity>[]> {
    return this.reviewModel
      .find({reviewId})
      .populate('userId');
  }

  public async findByUserId(userId: string): Promise<DocumentType<ReviewEntity>[]> {
    return this.reviewModel
      .find({userId});
  }

  public async findByFitnessBoxId(fitnessBoxId: string): Promise<DocumentType<ReviewEntity>[]> {
    return this.reviewModel
      .find({fitnessBoxId});
  }

  public async deleteByReviewId(reviewId: string): Promise<number> {
    const result = await this.reviewModel
      .deleteMany({reviewId})
      .exec();

    return result.deletedCount;
  }
}
