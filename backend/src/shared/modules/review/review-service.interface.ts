import { DocumentType } from '@typegoose/typegoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewEntity } from './review.entity';


export interface ReviewService {
  create(dto: CreateReviewDto): Promise<DocumentType<ReviewEntity>>;
  find(): Promise<DocumentType<ReviewEntity>[]>;
  findByReviewId(reviewId: string): Promise<DocumentType<ReviewEntity>[]>;
  findByUserId(userId: string): Promise<DocumentType<ReviewEntity>[] | null>;
  findByFitnessBoxId(fitnessBoxId: string): Promise<DocumentType<ReviewEntity>[] | null>;
  deleteByReviewId(reviewId: string): Promise<number | null>;
}
