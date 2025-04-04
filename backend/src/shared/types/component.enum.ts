export const Component = {
  RestApplication: Symbol.for('RestApplication'),
  Logger: Symbol.for('Logger'),
  Config: Symbol.for('Config'),
  DatabaseClient: Symbol.for('DatabaseClient'),

  UserService: Symbol.for('UserService'),
  UserModel: Symbol.for('UserModel'),

  FitnessBoxService: Symbol.for('FitnessBoxService'),
  FitnessBoxModel: Symbol.for('FitnessBoxModel'),

  PersonalWorkoutService: Symbol.for('PersonalWorkoutService'),
  PersonalWorkoutModel: Symbol.for('PersonalWorkoutModel'),

  ReviewService: Symbol.for('ReviewService'),
  ReviewModel: Symbol.for('ReviewModel'),

  SessionService: Symbol.for('SessionService'),
  SessionModel: Symbol.for('SessionModel'),

  TrainerService: Symbol.for('TrainerService'),
  TrainerModel: Symbol.for('TrainerModel'),
} as const;
