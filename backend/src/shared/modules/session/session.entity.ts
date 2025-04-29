import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { FitnessBoxEntity } from '../fitness-box/fitness-box.entity.js';
import { UserEntity } from '../user/user.entity.js';
import { TrainerEntity } from '../trainer/trainer.entity.js';


// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface SessionEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'sessions'
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class SessionEntity extends defaultClasses.TimeStamps {
  @prop({
    type: String,
    ref: FitnessBoxEntity,
    required: true
  })
  public fitnessBoxId: string;

  @prop({
    type: String,
    ref: UserEntity,
    required: true
  })
  public userId: string;

  @prop({
    type: String,
    ref: TrainerEntity,
    default: undefined
  })
  public trainerId: string;

  @prop({ type: Boolean, required: false, default: false })
  public acceptWorkout: boolean;

  @prop({ type: Boolean, required: false, default: false })
  public friend: boolean;

  @prop({type: String, required: true, })
  public date: string;

  @prop({type: String, required: true, })
  public hour: string;
}

export const SessionModel = getModelForClass(SessionEntity);
