export type TSessions = {
  sessionId: string;
  boxId: string;
  userId: string;
  trainerId: string | undefined;
  acceptWorkout: boolean;
  friend: boolean;
  date: string;
  hour: string;
}

export const sessions: TSessions[] = [
  {
    sessionId: '1',

    boxId: '1',
    userId: '1',

    trainerId: '1',
    acceptWorkout: true,


    date: '03.24',
    hour: '20',

    friend: false,
  },
  {
    sessionId: '2',

    boxId: '1',
    userId: '1',

    trainerId: undefined,
    acceptWorkout: false,


    date: '03.26',
    hour: '16',

    friend: false,
  },
  {
    sessionId: '3',

    boxId: '1',
    userId: '1',

    trainerId: undefined,
    acceptWorkout: false,


    date: '03.26',
    hour: '14',

    friend: false,
  },
  {
    sessionId: '4',

    boxId: '1',
    userId: '1',

    trainerId: undefined,
    acceptWorkout: false,


    date: '03.25',
    hour: '13',

    friend: false,
  },
];
