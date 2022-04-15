import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    
    if(!value) {
        return null;
    }

    if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
        return {
            password: true,
        }
    }
    return null;
}

export function passwordMatch(passwordFormControl: AbstractControl) {
    const validatorFn: ValidatorFn = (rePasswordFormControl: AbstractControl) => {
        if(passwordFormControl.value !== rePasswordFormControl.value) {
            return {
                passwordMatch: true
            }
        }
        return null;
    }
    return validatorFn;
}
