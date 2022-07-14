import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MutiStepService } from 'src/app/core/services/product/muti-step/muti-step.service';
import { FormProvider } from '../../form-provider';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent{
  accountForm: FormGroup;
  isFormSubmitted = false;
  validationMessages = {
    name: [
      { type: 'required', message: 'MESSAGE.REQUIRED' },
      { type: 'minlength', message: 'MESSAGE.MINLENGTH' },
      { type: 'maxlength', message: 'MESSAGE.MAXLENGTH' },
    ],
    email: [
      { type: 'required', message: 'MESSAGE.REQUIRED' },
      { type: 'email', message: 'MESSAGE.EMAIL' },
    ],
  };
  constructor(
    private formProvider: FormProvider,
    private translate: TranslateService,
    private mutiStepService : MutiStepService
  ) {
    this.accountForm = formProvider.getForm().get('account') as FormGroup;
  }

  onSubmit() {
    this.isFormSubmitted = true;

    if (this.accountForm.invalid) {
      return false;
    }
    this.mutiStepService.currentForm = 'personal';
    this.isFormSubmitted = false;
    this.accountForm.reset();
    return true;
  }
}
