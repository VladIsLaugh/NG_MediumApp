import { Action, createReducer, on } from '@ngrx/store';

import { registerAction } from './actions';
import { AuthStateInterface } from './../types/authState.interface';

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action){
  console.log("here");

  return authReducer(state, action)
}
