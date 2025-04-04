import { TTime } from '../../../types/session.type';

export class CreateSessionDto {
  public sessionId: string;
  public boxId: string;
  public userId: string;
  public trainerId: string | undefined;
  public acceptWorkout: boolean;
  public time: TTime;
  public friend: boolean;
}

