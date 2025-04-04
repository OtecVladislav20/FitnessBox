import { DocumentType } from '@typegoose/typegoose';
import { CreateReviewDto } from './dto/create-review.dto';


export interface ReviewService {
  create(dto: CreateReviewDto): Promise<DocumentType<ReviewEntity>>;
  findByReviewId(reviewId: string): Promise<DocumentType<ReviewEntity>[]>;
  deleteByReviewId(reviewId: string): Promise<number | null>;
}
