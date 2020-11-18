import { AbstractControl } from '@angular/forms';
export function PasswordValidator(Control: AbstractControl): { [key: string]: boolean } | null {
    const password = Control.get('password');
    const confirmPassword = Control.get('confirmPassword');
    if (password.pristine || confirmPassword.pristine) {
        return null;
    }
    return password && confirmPassword && password.value !== confirmPassword.value ? {misMatch: true } : null;
}
