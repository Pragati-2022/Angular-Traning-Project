import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MutiStepService } from 'src/app/core/services/product/muti-step/muti-step.service';
import { FormProvider } from '../../form-provider';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent {
  personalForm: FormGroup;
  isFormSubmitted = false;
  validationMessages = {
    fullName: [
      { type: 'required', message: 'MESSAGE.REQUIRED' },
    ],
    country: [
      { type: 'required', message: 'MESSAGE.REQUIRED' },
    ],
  };
  constructor(
    private formProvider: FormProvider,
    private translate: TranslateService,
    private mutiStepService : MutiStepService
  ) {
    this.personalForm = formProvider.getForm().get('personal') as FormGroup;
  }

  onSubmit() {
    this.isFormSubmitted = true;

    if (this.personalForm.invalid) {
      return false;
    }

    console.log(this.personalForm.value);
    this.mutiStepService.currentForm = 'account';
    this.isFormSubmitted = false;
    this.personalForm.reset();
    return true;
  }
}
