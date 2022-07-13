import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  // $('#click').on('click', function(){
  //   $('.menu').toggleClass('d-none');
  // });
  loginForm!: FormGroup;
  isFormSubmitted = false;

  formData: any[] = [
    { label: 'email', type: 'email',lang:'LABEL.EMAIL'},
    {
      label: 'password',lang:'LABEL.PASSWORD',
      type: 'password',
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.initialization();
  }

  initialization() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get _loginForm() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.isFormSubmitted = true;
    if (!this.loginForm.valid) {
      alert('Invalid data!');
      return false;
    }

    localStorage.setItem('loggedIn', btoa(this.loginForm.value.email));
    this.router.navigate(['home']);

    this.initialization();
    this.isFormSubmitted = false;
    return true;
  }
}
