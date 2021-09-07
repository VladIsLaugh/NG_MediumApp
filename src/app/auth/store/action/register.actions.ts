import { BackendErrorsInterface } from './../../../shared/types/backendErrors.interface';
import { createAction, props } from '@ngrx/store';

import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';
import { RegisterRequestInterface } from '../../types/request.interface';
import { ActionTypes } from '../actionTypes';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const reginsterSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const reginsterFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
