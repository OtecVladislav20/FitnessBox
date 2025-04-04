import 'reflect-metadata';
import { Container } from 'inversify';
import { RestApplication } from './rest/rest.application';
import { Component } from './shared/types/component.enum';
import { Logger } from './shared/libs/logger/logger.interface';
import { RestSchema } from './shared/libs/config/rest.schema';
import { Config } from './shared/libs/config/config.interface';
import { DatabaseClient } from './shared/libs/database-client/database-client.interface';
import { UserService } from './shared/modules/user/user-service.interface';
import { types } from '@typegoose/typegoose';
import { UserEntity, UserModel } from './shared/modules/user/user.entity';
import { PinoLogger } from './shared/libs/logger/pino.logger';
import { RestConfig } from './shared/libs/config/rest.config';
import { MongoDatabaseClient } from './shared/libs/database-client/mongo.database-client';
import { DefaultUserService } from './shared/modules/user/default-user.service';
import { FitnessBoxService } from './shared/modules/fitness-box/fitness-box.interface';
import { FitnessBoxEntity, FitnessBoxModel } from './shared/modules/fitness-box/fitness-box.entity';
import { DefaultFitnessBoxService } from './shared/modules/fitness-box/default-fitness-box.service';


async function bootstrap() {
  const restApplicationContainer = new Container();

  restApplicationContainer.bind<RestApplication>(Component.RestApplication).to(RestApplication).inSingletonScope(); // .inSingletonScope() - создает класс в единсвенном экземпляре
  restApplicationContainer.bind<Logger>(Component.Logger).to(PinoLogger).inSingletonScope();
  restApplicationContainer.bind<Config<RestSchema>>(Component.Config).to(RestConfig).inSingletonScope();
  restApplicationContainer.bind<DatabaseClient>(Component.DatabaseClient).to(MongoDatabaseClient).inSingletonScope();

  restApplicationContainer.bind<UserService>(Component.UserService).to(DefaultUserService).inSingletonScope();
  restApplicationContainer.bind<types.ModelType<UserEntity>>(Component.UserModel).toConstantValue(UserModel);

  restApplicationContainer.bind<FitnessBoxService>(Component.FitnessBoxService).to(DefaultFitnessBoxService).inSingletonScope();
  restApplicationContainer.bind<types.ModelType<FitnessBoxEntity>>(Component.FitnessBoxModel).toConstantValue(FitnessBoxModel);

  const application = restApplicationContainer.get<RestApplication>(Component.RestApplication);
  await application.init();
}

bootstrap();
