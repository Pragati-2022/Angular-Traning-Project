import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MutiStepService } from 'src/app/core/services/product/muti-step/muti-step.service';
import { FormProvider } from '../form-provider';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
  providers: [{ provide: FormProvider, useExisting: OnboardingComponent }],
})
export class OnboardingComponent {
  constructor(public mutiStepService : MutiStepService) {};

  onboardingForm = new FormGroup({
    account: new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    }),
    personal: new FormGroup({
      fullName: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      about: new FormControl(''),
    }),
  });

  getForm() {
    return this.onboardingForm;
  }
}
