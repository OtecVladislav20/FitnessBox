export type TSessions = {
  sessionId: string;
  fitnessBoxId: string;
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

    fitnessBoxId: '1',
    userId: '1',

    trainerId: '1',
    acceptWorkout: true,


    date: '03.24',
    hour: '20',

    friend: false,
  },
  {
    sessionId: '2',

    fitnessBoxId: '1',
    userId: '1',

    trainerId: undefined,
    acceptWorkout: false,


    date: '03.26',
    hour: '16',

    friend: false,
  },
  {
    sessionId: '3',

    fitnessBoxId: '1',
    userId: '1',

    trainerId: undefined,
    acceptWorkout: false,


    date: '03.26',
    hour: '14',

    friend: false,
  },
  {
    sessionId: '4',

    fitnessBoxId: '1',
    userId: '1',

    trainerId: undefined,
    acceptWorkout: false,


    date: '03.25',
    hour: '13',

    friend: false,
  },
];
