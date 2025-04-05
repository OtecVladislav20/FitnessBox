import 'reflect-metadata';
import { Container } from 'inversify';
import { RestApplication } from './rest/rest.application.js';
import { Component } from './shared/types/component.enum';
import { Logger } from './shared/libs/logger/logger.interface.js';
import { RestSchema } from './shared/libs/config/rest.schema.js';
import { Config } from './shared/libs/config/config.interface.js';
import { DatabaseClient } from './shared/libs/database-client/database-client.interface.js';
import { UserService } from './shared/modules/user/user-service.interface.js';
import { types } from '@typegoose/typegoose';
import { UserEntity, UserModel } from './shared/modules/user/user.entity.js';
import { PinoLogger } from './shared/libs/logger/pino.logger.js';
import { RestConfig } from './shared/libs/config/rest.config.js';
import { MongoDatabaseClient } from './shared/libs/database-client/mongo.database-client.js';
import { DefaultUserService } from './shared/modules/user/default-user.service.js';
import { FitnessBoxService } from './shared/modules/fitness-box/fitness-box.interface.js';
import { FitnessBoxEntity, FitnessBoxModel } from './shared/modules/fitness-box/fitness-box.entity.js';
import { DefaultFitnessBoxService } from './shared/modules/fitness-box/default-fitness-box.service.js';
import { PersonalWorkoutService } from './shared/modules/personal-workout/personal-workout-service.interface.js';
import { PersonalWorkoutEntity, PersonalWorkoutModel } from './shared/modules/personal-workout/personal-workout.entity.js';
import { DefaultPersonalWorkoutService } from './shared/modules/personal-workout/default-personal-workout.service.js';
import { ReviewService } from './shared/modules/review/review-service.interface.js';
import { ReviewEntity, ReviewModel } from './shared/modules/review/review.entity.js';
import { DefaultReviewService } from './shared/modules/review/default-review.service.js';
import { SessionService } from './shared/modules/session/session-service.interface.js';
import { SessionEntity, SessionModel } from './shared/modules/session/session.entity.js';
import { DefaultSessionService } from './shared/modules/session/default-session.service.js';
import { TrainerService } from './shared/modules/trainer/trainer-service.interface.js';
import { TrainerEntity, TrainerModel } from './shared/modules/trainer/trainer.entity.js';
import { DefaultTrainerService } from './shared/modules/trainer/default-trainer.service.js';
import { Controller } from './shared/libs/rest/controller/controller.interface.js';
import { ReviewController } from './shared/modules/review/review.controller.js';
import { AppExceptionFilter } from './shared/libs/rest/exception-filter/app-exception-filter.js';
import { ExceptionFilter } from './shared/libs/rest/exception-filter/exception-filter.interface.js';
import { UserController } from './shared/modules/user/user.controller.js';


async function bootstrap() {
  const restApplicationContainer = new Container();

  restApplicationContainer.bind<RestApplication>(Component.RestApplication).to(RestApplication).inSingletonScope();
  restApplicationContainer.bind<Logger>(Component.Logger).to(PinoLogger).inSingletonScope();
  restApplicationContainer.bind<Config<RestSchema>>(Component.Config).to(RestConfig).inSingletonScope();
  restApplicationContainer.bind<DatabaseClient>(Component.DatabaseClient).to(MongoDatabaseClient).inSingletonScope();
  restApplicationContainer.bind<ExceptionFilter>(Component.ExceptionFilter).to(AppExceptionFilter).inSingletonScope();

  restApplicationContainer.bind<UserService>(Component.UserService).to(DefaultUserService).inSingletonScope();
  restApplicationContainer.bind<types.ModelType<UserEntity>>(Component.UserModel).toConstantValue(UserModel);
  restApplicationContainer.bind<Controller>(Component.UserController).to(UserController).inSingletonScope();


  restApplicationContainer.bind<FitnessBoxService>(Component.FitnessBoxService).to(DefaultFitnessBoxService).inSingletonScope();
  restApplicationContainer.bind<types.ModelType<FitnessBoxEntity>>(Component.FitnessBoxModel).toConstantValue(FitnessBoxModel);

  restApplicationContainer.bind<PersonalWorkoutService>(Component.PersonalWorkoutService).to(DefaultPersonalWorkoutService).inSingletonScope();
  restApplicationContainer.bind<types.ModelType<PersonalWorkoutEntity>>(Component.PersonalWorkoutModel).toConstantValue(PersonalWorkoutModel);

  restApplicationContainer.bind<ReviewService>(Component.ReviewService).to(DefaultReviewService).inSingletonScope();
  restApplicationContainer.bind<types.ModelType<ReviewEntity>>(Component.ReviewModel).toConstantValue(ReviewModel);
  restApplicationContainer.bind<Controller>(Component.ReviewController).to(ReviewController).inSingletonScope();

  restApplicationContainer.bind<SessionService>(Component.SessionService).to(DefaultSessionService).inSingletonScope();
  restApplicationContainer.bind<types.ModelType<SessionEntity>>(Component.SessionModel).toConstantValue(SessionModel);

  restApplicationContainer.bind<TrainerService>(Component.TrainerService).to(DefaultTrainerService).inSingletonScope();
  restApplicationContainer.bind<types.ModelType<TrainerEntity>>(Component.TrainerModel).toConstantValue(TrainerModel);

  const application = restApplicationContainer.get<RestApplication>(Component.RestApplication);
  await application.init();
}

bootstrap();
