import { defaultClasses, getModelForClass, prop, modelOptions, Ref } from '@typegoose/typegoose';
import { UserEntity } from '../user/user.entity.js';
import { TrainerEntity } from '../trainer/trainer.entity.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface PersonalWorkoutEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'personal-workout',
    timestamps: true,
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class PersonalWorkoutEntity extends defaultClasses.TimeStamps {
  // @prop({ unique: true, required: true })
  // public personalWorkoutId: string;

  @prop({
    ref: TrainerEntity,
    required: true
  })
  public trainerId: Ref<TrainerEntity>;

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId: Ref<UserEntity>;

  @prop({type: Number, default: 0})
  public countWorkout: number;

}

export const PersonalWorkoutModel = getModelForClass(PersonalWorkoutEntity);
