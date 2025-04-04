export type TTime = {
  date: string;
  hour: string;
}

export type TSessions = {
  sessionId: string;
  boxId: string;
  userId: string;
  trainerId: string | undefined;
  acceptWorkout: boolean;
  time: TTime;
  friend: boolean;
}

