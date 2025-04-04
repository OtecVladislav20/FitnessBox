import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { UserEntity } from '../user/user.entity';
import { FitnessBoxEntity } from '../fitness-box/fitness-box.entity';


// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface ReviewEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'review'
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class ReviewEntity extends defaultClasses.TimeStamps {
  @prop({ trim: true, required: true })
  public comment: string;

  @prop({ required: true })
  public score: string;

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId: Ref<UserEntity>;

  @prop({
    ref: FitnessBoxEntity,
    required: true
  })
  public fitnessBoxId: Ref<FitnessBoxEntity>;
}

export const ReviewModel = getModelForClass(ReviewEntity);
