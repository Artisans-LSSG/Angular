import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  errors: any = null;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      password_confirmation: [''],
    });
  }
  ngOnInit() {}
  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        //  console.log(error.error.name);
        //  console.log(error.error.email);
        //  console.log(error.error.password);
        //  console.log(error.error.password_confirmation);

        //  alert(error.error.name);
        //  alert(error.error.email);
        //  alert(error.error.password);
        //  alert(error.error.password_confirmation);
        // this.errors = error.error;
        // alert("Email has already been taken");
        this.errors = error.error;
        console.log(this.errors);
        alert(error.error);
      },
      () => {
        this.registerForm.reset();
        alert("Registration has been done successfully!!");
                this.router.navigate(['login']);
      }
    );
  }

}
