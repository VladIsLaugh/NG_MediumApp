import { Action, createReducer, on } from '@ngrx/store';

import { reginsterSuccessAction, registerAction, reginsterFailureAction } from './action/register.actions';
import { AuthStateInterface } from './../types/authState.interface';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null 
    })
  ),
  on(reginsterSuccessAction, (state, action): AuthStateInterface =>({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser
  })),
  on(reginsterFailureAction, (state, action): AuthStateInterface =>({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,

  }))
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
