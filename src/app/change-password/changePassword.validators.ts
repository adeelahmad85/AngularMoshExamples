import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ChangePasswordValidators {
    // with Async Operation
    static checkServerPassword(control : AbstractControl): Promise<ValidationErrors | null>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if ((control.value as string) !== "1234" )
                    resolve( { notQualifyWithServer: true} );
                else
                    resolve( null );                
            },2000);
        });
    }

    static passwordsShouldMatch(control : AbstractControl): ValidationErrors | null{
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if (newPassword.value !== confirmPassword.value) {
            return { passwordNotMatch : true};
        }

        return null;
    }
}