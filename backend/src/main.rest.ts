import 'reflect-metadata';
import { Container } from 'inversify';
import { RestApplication } from './rest/rest.application';
import { Component } from './shared/types/component.enum';
import { createRestApplicationContainer } from './rest/rest.container';
import { createUserContainer } from './shared/modules/user/user.container';


async function bootstrap() {
  const appContainer = Container.merge(
    createRestApplicationContainer(),
    createUserContainer(),
  );

  const application = appContainer.get<RestApplication>(Component.RestApplication);
  await application.init();
}

bootstrap();
