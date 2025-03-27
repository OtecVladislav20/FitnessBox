export type TReview = {
  reviewId: string;
  userId: string;
  score: number;
  comment: string;
}

export const reviews: TReview[] = [
  {
    reviewId: '1',
    userId: '1',
    score: 5,
    comment: 'Хороший зал',
  },
  {
    reviewId: '2',
    userId: '1',
    score: 5,
    comment: 'Хороший зал',
  },
  {
    reviewId: '3',
    userId: '1',
    score: 5,
    comment: 'Хороший зал',
  },
];
