import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainSpace(control : AbstractControl): ValidationErrors | null{
        if ((control.value as string).indexOf(' ') >= 0 ) {
            return { cannotContainSpace: true};
        }

        return null;
    }

    // without asyc operation
    /* static shouldBeUnique(control : AbstractControl): ValidationErrors | null{
        if ((control.value as string) === "adeel" ) {
            return { shouldBeUnique: true};
        }

        return null;
    } */

    // with Async Operation
    static shouldBeUnique(control : AbstractControl): Promise<ValidationErrors | null>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if ((control.value as string) === "adeel" )
                    resolve( { shouldBeUnique: true} );
                else
                    resolve( null );                
            },2000);
        });
    }
}