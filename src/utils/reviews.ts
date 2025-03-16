export type TReview = {
  id: string;
  userId: string;
  score: number;
  comment: string;
}

export const reviews: TReview[] = [
  {
    id: '1',
    userId: '1',
    score: 5,
    comment: 'Хороший зал',
  },
  {
    id: '2',
    userId: '1',
    score: 5,
    comment: 'Хороший зал',
  },
  {
    id: '3',
    userId: '1',
    score: 5,
    comment: 'Хороший зал',
  },
];
