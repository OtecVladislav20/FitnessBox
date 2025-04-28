export const Component = {
  RestApplication: Symbol.for('RestApplication'),
  Logger: Symbol.for('Logger'),
  Config: Symbol.for('Config'),
  DatabaseClient: Symbol.for('DatabaseClient'),
  ExceptionFilter: Symbol.for('ExceptionFilter'),
  AuthService: Symbol.for('AuthService'),
  AuthExceptionFilter: Symbol.for('AuthExceptionFilter'),

  UserService: Symbol.for('UserService'),
  UserModel: Symbol.for('UserModel'),
  UserController: Symbol.for('UserController'),

  FitnessBoxService: Symbol.for('FitnessBoxService'),
  FitnessBoxModel: Symbol.for('FitnessBoxModel'),
  FitnessBoxController: Symbol.for('FitnessBoxController'),

  PersonalWorkoutService: Symbol.for('PersonalWorkoutService'),
  PersonalWorkoutModel: Symbol.for('PersonalWorkoutModel'),

  ReviewService: Symbol.for('ReviewService'),
  ReviewModel: Symbol.for('ReviewModel'),
  ReviewController: Symbol.for('ReviewController'),

  SessionService: Symbol.for('SessionService'),
  SessionModel: Symbol.for('SessionModel'),

  TrainerService: Symbol.for('TrainerService'),
  TrainerModel: Symbol.for('TrainerModel'),
} as const;
