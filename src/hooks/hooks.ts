import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { TAppDispatch, State } from '../store/types/state';

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
