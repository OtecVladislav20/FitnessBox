export const Component = {
  RestApplication: Symbol.for('RestApplication'),
  Logger: Symbol.for('Logger'),
  Config: Symbol.for('Config'),
  DatabaseClient: Symbol.for('DatabaseClient'),

  UserService: Symbol.for('UserService'),
  UserModel: Symbol.for('UserModel'),

  FitnessBoxService: Symbol.for('FitnessBoxService'),
  FitnessBoxModel: Symbol.for('FitnessBoxModel'),
} as const;
