export class CreateSessionDto {
  // public sessionId: string;
  public boxId: string;
  public userId: string;
  public trainerId: string | undefined;
  public acceptWorkout: boolean;
  public friend: boolean;
  public date: string;
  public hour: string;
}

