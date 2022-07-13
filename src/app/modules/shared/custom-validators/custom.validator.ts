import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidator {
  static passwordMatch(control: AbstractControl): ValidationErrors | null {
    if (
      control.get('password')?.value !== control.get('confirmPassword')?.value
    ) {
      return { passwordMatch: true };
    } else return null;
  }

  static emailMatch(control: AbstractControl): ValidationErrors | null {
    if (control.get('email')?.value !== control.get('confirmEmail')?.value) {
      return { emailMatch: true };
    } else return null;
  }
}
