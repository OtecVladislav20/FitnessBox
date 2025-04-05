import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { FitnessBoxEntity } from '../fitness-box/fitness-box.entity.js';
import { UserEntity } from '../user/user.entity.js';
import { TrainerEntity } from '../trainer/trainer.entity.js';


@modelOptions({ schemaOptions: { _id: false } }) // Отключаем _id для встроенного документа
export class TimeEntity {
  @prop({
    type: String,
    required: true,
  })
  public date!: string;

  @prop({
    type: String,
    required: true,
  })
  public hour!: string;
}

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

  @prop({ type: Boolean, required: false, default: false })
  public acceptWorkout: boolean;

  @prop({ type: TimeEntity, required: true })
  public time: TimeEntity;

  @prop({ type: Boolean, required: false, default: false })
  public friend: boolean;
}

export const SessionModel = getModelForClass(SessionEntity);
