import { BackendErrorsInterface } from './../../../shared/types/backendErrors.interface';
import { RegisterRequestInterface } from './../../types/request.interface';
import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';
import { AuthService } from './../../services/auth.service';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from './../../store/selectors';
import { registerAction } from '../../store/action/register.actions';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ma-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  initializeValues(): void {
    // @ts-ignore
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    // @ts-ignore
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(): void {
    console.log('submit', this.form.value, this.form.valid);
    const request: RegisterRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(registerAction({ request }));
    //   this.authService
    //     .register(this.form.value)
    //     .subscribe((currentUser: CurrentUserInterface) =>
    //       console.log(currentUser)
    //     );
  }
}
