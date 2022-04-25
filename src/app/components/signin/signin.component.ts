import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenService } from '../../shared/token.service';
import { AuthStateService } from '../../shared/auth-state.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  errors:any = null;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService
  ) {
    this.loginForm = this.fb.group({
      email: [],
      password: [],
    });
  }
  ngOnInit() {}
  onSubmit() {
    this.authService.signin(this.loginForm.value).subscribe(
      (result) => {
        this.responseHandler(result);
      },
      (error) => {
        // console.log(error.error.email);
        // console.log(error.error.password);

        // alert(error.error.email);
        // alert(error.error.password);
        this.errors = error.error;
        alert("Un Authorized User");
      },
      () => {
        this.authState.setAuthState(true);
        this.loginForm.reset();

        this.router.navigate(['maindashboard']);
        alert("login Successfull!!");
      }
    );
  }
  // Handle response
  responseHandler(data:any) {
    this.token.handleData(data.access_token);
  }

}
