import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common/common.service';
import { ToasterService } from 'src/app/core/services/toastr.service';

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
  fieldTextType!: boolean;

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
    private toasterService : ToasterService,
    private commomService : CommonService
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
      this.toasterService.toasterError(this.commomService.getTranslateData("MESSAGE.ERROR_INVALID"))
      return
    }

    localStorage.setItem('loggedIn', btoa(this.loginForm.value.email));
    this.toasterService.toasterSuccess(this.commomService.getTranslateData("MESSAGE.SUCCESS_LOGGIN"));
    this.router.navigate(['home']);

    this.initialization();
    this.isFormSubmitted = false;
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
