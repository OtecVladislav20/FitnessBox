export type TSessions = {
  id: string;
  fitnessBoxId: string;
  userId: string;
  trainerId: string | undefined;
  acceptWorkout: boolean;
  friend: boolean;
  date: string;
  hour: string;
}

export type TSessionsUpdate = {
  id: string;
  boxId?: string;
  trainerId?: string | undefined;
  acceptWorkout?: boolean;
  friend?: boolean;
  date?: string;
  hour?: string;
}

export default class UpdateSessionDto {
  public boxId?: string;
  public trainerId?: string | undefined;
  public acceptWorkout?: boolean;
  public friend?: boolean;
  public date?: string;
  public hour?: string;
}

export const sessions: TSessions[] = [
  {
    id: '1',

    fitnessBoxId: '1',
    userId: '1',

    trainerId: '1',
    acceptWorkout: true,


    date: '03.24',
    hour: '20',

    friend: false,
  },
  {
    id: '2',

    fitnessBoxId: '1',
    userId: '1',

    trainerId: undefined,
    acceptWorkout: false,


    date: '03.26',
    hour: '16',

    friend: false,
  },
  {
    id: '3',

    fitnessBoxId: '1',
    userId: '1',

    trainerId: undefined,
    acceptWorkout: false,


    date: '03.26',
    hour: '14',

    friend: false,
  },
  {
    id: '4',

    fitnessBoxId: '1',
    userId: '1',

    trainerId: undefined,
    acceptWorkout: false,


    date: '03.25',
    hour: '13',

    friend: false,
  },
];
