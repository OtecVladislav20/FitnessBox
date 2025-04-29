import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { TAppDispatch, TState} from './types/state';
import { TFitnessBox } from '../utils/fitness-boxes';
import { redirectToRoute, requireAuthorization } from './action';
import { AppRoute, AuthorizationStatus } from '../const';
import { saveToken } from '../services/token';
import { TUserData } from '../types/user-data';
import { TAuthData } from '../types/auth-data';


export const fetchFitnessBoxesAction = createAsyncThunk<TFitnessBox[], undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchFitnessBoxes',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TFitnessBox[]>('/fitness-boxes');
    return data;
  },
);

export const fetchFitnessBoxAction = createAsyncThunk<TFitnessBox, string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchFitnessBox',
  async (id, {extra: api}) => {
    const {data} = await api.get<TFitnessBox>(`/fitness-boxes/${id}`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get('/users/login');
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, TAuthData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: mail, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<TUserData>('/users/login', {mail, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Catalog));
  },
);
