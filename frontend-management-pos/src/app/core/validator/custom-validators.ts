import {AbstractControl} from "@angular/forms";

export class CustomValidators {
  static isNumber(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value;
    if (value === null || value === undefined || value === '') {
      return null;
    }
    return null;
  };
}
