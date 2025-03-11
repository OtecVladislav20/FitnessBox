import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { rootReducer } from '../root-reducer';
import { browserHistory } from '../../components/services/browser-history';
import { redirectToRoute } from '../action';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === redirectToRoute.toString()) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
