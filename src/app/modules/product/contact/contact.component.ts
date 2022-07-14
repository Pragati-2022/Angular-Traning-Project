import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from '../../shared/custom-validators/custom.validator';
import Swal from "sweetalert2"
import { CommonService } from 'src/app/core/services/common/common.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isFormSubmitted = false;
  maxDate: Date;
  formData: any[] = [
    { label: 'name', type: 'text' },
    { label: 'email', type: 'email' },
    { label: 'details', type: 'text' },
    { label: 'password', type: 'password' },
    { label: 'confirmPassword', type: 'password' },
    { label: 'age', type: 'text' },
    { label: 'birthDate' },
    { label: 'gender', type: 'radio', value: ['male', 'female'] },
    { label: 'tnc', type: 'checkbox' }
  ];

  constructor(private formBuilder: FormBuilder, private commonService : CommonService) {
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() - 1);
  }

  ngOnInit(): void {
    this.initialization();
  }

  initialization() {
    this.contactForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
        email: ['', [Validators.required, Validators.email]],
        details: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
        age: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1)]],
        birthDate: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        tnc: ['', [Validators.required]]
      },
      { validator: CustomValidator.passwordMatch }
    );
  }

  get _contactForm() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.isFormSubmitted = true;

    if (this.contactForm.invalid) {
      return;
    }
    Swal.fire({
      title: this.commonService.getTranslateData("TITLE.SURE_TITLE"),
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: this.commonService.getTranslateData("BUTTON.YES"),
      denyButtonText: this.commonService.getTranslateData("BUTTON.NO")
    }).then((result) => {
      let data =  this.contactForm.value;
      this.initialization();
      this.isFormSubmitted = false;
      if (result.isConfirmed) {
        console.log(data);
        Swal.fire(this.commonService.getTranslateData("TITLE.CONFIRM_TITLE"), '', 'success');
      } else if (result.isDenied) {
        Swal.fire(this.commonService.getTranslateData("TITLE.CANCEL_TITLE"), '', 'info');
      }
    });
  }

  onClear() {
    this.initialization();
    this.isFormSubmitted = false;
  }

  myValidationFunction(event: any, label: string) {
    if (label == 'age') {
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
    return true;
  }
}
