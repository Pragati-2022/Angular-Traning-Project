import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from '../../shared/custom-validators/custom.validator';
import Swal from 'sweetalert2';
import { CommonService } from 'src/app/core/services/common/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutForm!: FormGroup;
  isFormSubmitted = false;
  preference!: string;

  constructor(private formBuilder: FormBuilder, private commonService : CommonService) {}

  ngOnInit(): void {
    this.initialization();
  }

  initialization() {
    this.aboutForm = this.formBuilder.group(
      {
        name: ['', [Validators.required]],
        contact: ['email', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', [Validators.required, Validators.email]],
        phone: [''],
        skills: this.formBuilder.array([])
      },
      { validator: CustomValidator.emailMatch }
    );
  }

  get _aboutForm() {
    return this.aboutForm.controls;
  }

  get _preference() {
    return this._aboutForm['preference'] as FormArray;
  }

  get _skills() {
    return this._aboutForm['skills'] as FormArray;
  }

  onChangePreference(event: any) {
    const preference = event.target.value;

    if (preference === 'email') {
      this._aboutForm['phone'].clearValidators();
      this._aboutForm['email'].setValidators([Validators.required, Validators.email]);
      this._aboutForm['confirmEmail'].setValidators([Validators.required, Validators.email]);
      this.aboutForm.setValidators(CustomValidator.emailMatch);
    } else {
      this._aboutForm['email'].clearValidators();
      this._aboutForm['confirmEmail'].clearValidators();
      this.aboutForm.clearValidators();
      this._aboutForm['phone'].setValidators([Validators.required]);
    }
    this._aboutForm['email'].updateValueAndValidity();
    this.aboutForm.updateValueAndValidity();
    this._aboutForm['confirmEmail'].updateValueAndValidity();
    this._aboutForm['phone'].updateValueAndValidity();
  }

  onSubmit() {
    this.isFormSubmitted = true;

    if (!this.aboutForm.valid) {
      return;
    }

    Swal.fire({
      title: this.commonService.getTranslateData("TITLE.SURE_TITLE"),
      confirmButtonText: this.commonService.getTranslateData("BUTTON.YES"),
      cancelButtonText:  this.commonService.getTranslateData("BUTTON.NO"),
      showCancelButton: true,
      showCloseButton: true
    }).then((result) => {
      console.log(this.aboutForm.value);
      this.isFormSubmitted = false;
      this.initialization();
      if (result.isConfirmed) {
        //logic
        Swal.fire(this.commonService.getTranslateData("TITLE.CONFIRM_TITLE"), '', 'success');
      } else if (result.isDismissed) {
        Swal.fire(this.commonService.getTranslateData("TITLE.CANCEL_TITLE"), '', 'info');
      }
    });
  }

  myNumberValidationFunction(event: any) {
    try {
      let k;
      if (/^[0-9]*$/.test(event.key)) {
        return true;
      } else {
        event.preventDefault();
        return false;
      }
    } catch (e) {
      return false;
    }
  }

  addSkills() {
    this._skills.push(
      this.formBuilder.group({
        skill: ['', [Validators.required]],
        experience: ['', [Validators.required, Validators.maxLength(2)]],
        proficiency: ['', [Validators.required]]
      })
    );
  }

  removeSkill(index: number) {
    Swal.fire({
      title:this.commonService.getTranslateData("TITLE.SURE_TITLE"),
      text: this.commonService.getTranslateData("MESSAGE.WARNING_MSG"),
      icon: 'warning',
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.commonService.getTranslateData("BUTTON.YES")
    }).then((result) => {
      if (result.isConfirmed) {
        this._skills.removeAt(index);

        Swal.fire(this.commonService.getTranslateData("TITLE.DELETE_TITLE"), this.commonService.getTranslateData("MESSAGE.DELETE_MSG"), 'success');
      }
    });
  }
}
