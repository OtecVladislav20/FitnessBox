import { Expose } from 'class-transformer';

export class ReviewRdo {
  @Expose()
  public id: string;

  @Expose()
  public userId: string;

  @Expose()
  public fitnessBoxId: string;

  @Expose()
  public score: number;

  @Expose()
  public comment: string;
}
