import { Expose, Type } from 'class-transformer';
import { UserRdo } from '../../user/rdo/user.rdo.js';
import { FitnessBoxRdo } from '../../fitness-box/rdo/fitness-box.rdo.js';


export class SessionRdo {
  @Expose()
  public id: string;

  @Expose({ name: 'fitnessBoxId'})
  @Type(() => FitnessBoxRdo)
  public fitnessBoxId: FitnessBoxRdo;

  @Expose({ name: 'userId'})
  @Type(() => UserRdo)
  public userId: UserRdo;

  @Expose()
  public trainerId: string | undefined;

  @Expose()
  public acceptWorkout: boolean;

  @Expose()
  public friend: boolean;

  @Expose()
  public date: string;

  @Expose()
  public hour: string;
}
