import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function phoneNumValidator():ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.toString().trim();
    if (!value) return null;
    const phoneNumRegex = /^0\d{9}$/;
    return phoneNumRegex.test(value) ? null : { phoneNum: true };
  };
}
