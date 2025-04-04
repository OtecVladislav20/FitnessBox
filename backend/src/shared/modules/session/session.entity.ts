import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { UserEntity } from '../user/user.entity';
import { FitnessBoxEntity } from '../fitness-box/fitness-box.entity';
import { TTime } from '../../types/session.type';
import { TrainerEntity } from '../trainer/trainer.entity';


// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface SessionEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'session'
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class SessionEntity extends defaultClasses.TimeStamps {
  @prop({
    ref: FitnessBoxEntity,
    required: true
  })
  public fitnessBoxId: Ref<FitnessBoxEntity>;

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId: Ref<UserEntity>;

  @prop({
    ref: TrainerEntity,
    required: true
  })
  public trainerId: Ref<TrainerEntity>;

  @prop({ required: false, default: false })
  public acceptWorkout: boolean;

  @prop({ required: true })
  public time: TTime;

  @prop({ required: false, default: false })
  public friend: boolean;
}

export const SessionModel = getModelForClass(SessionEntity);
