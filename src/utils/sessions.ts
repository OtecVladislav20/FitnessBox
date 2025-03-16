export type TSessions = {
  id: string;
  boxId: string;
  userId: string;
  trainerId: string;
  acceptWorkout: boolean;
  time: TTime;
  friend: boolean;
}

type TTime = {
  [key: string] : string;
}

export const sessions: TSessions[] = [
  {
    id: '1',

    boxId: '1',
    userId: '1',

    trainerId: '1',
    acceptWorkout: true,

    time: {'1 сентября': '12:00'},
    friend: false,
  },
];
