export type TSessions = {
  sessionId: string;
  boxId: string;
  userId: string;
  trainerId: string | undefined;
  acceptWorkout: boolean;
  time: TTime;
  friend: boolean;
}

type TTime = {
  [key: string] : string;
}

export const sessions: TSessions[] = [
  {
    sessionId: '1',

    boxId: '1',
    userId: '1',

    trainerId: '1',
    acceptWorkout: true,

    time: {'21.03': '12'},
    friend: false,
  },
  {
    sessionId: '2',

    boxId: '1',
    userId: '1',

    trainerId: undefined,
    acceptWorkout: false,

    time: {'21.03': '14'},
    friend: false,
  },
  {
    sessionId: '2',

    boxId: '1',
    userId: '1',

    trainerId: undefined,
    acceptWorkout: false,

    time: {'22.03': '14'},
    friend: false,
  },
];
