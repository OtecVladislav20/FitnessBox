import { Container } from 'inversify';
import { RestApplication } from './rest/rest.application';
import { Config } from './shared/libs/config/config.interface';
import { RestConfig } from './shared/libs/config/rest.config';
import { RestSchema } from './shared/libs/config/rest.schema';
import { Logger } from './shared/libs/logger/logger.interface';
import { PinoLogger } from './shared/libs/logger/pino.logger';
import { Component } from './shared/types/component.enum';


async function bootstrap() {
  const container = new Container();
  container.bind<RestApplication>(Component.RestApplication).to(RestApplication).inSingletonScope(); // .inSingletonScope() - создает класс в единсвенном экземпляре
  container.bind<Logger>(Component.Logger).to(PinoLogger).inSingletonScope();
  container.bind<Config<RestSchema>>(Component.Config).to(RestConfig).inSingletonScope();

  const application = container.get<RestApplication>(Component.RestApplication);
  await application.init();
}

bootstrap();
