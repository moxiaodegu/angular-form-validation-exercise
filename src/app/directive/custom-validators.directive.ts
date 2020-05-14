import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appCustomValidators]',
  providers: [ {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CustomValidatorsDirective),
    multi: true
  }]
})

export class CustomValidatorsDirective implements Validator{

  @Input('appCustomValidators') data: [];

  constructor() { }

  change: () => void;

  init(name): ValidationErrors {
   let isFlag = true;
   this.data.forEach((e: any) => {
     e.program.forEach(s => {
       if (name && name === s.programName) {
        isFlag = false;
       }
     });
   });

   if (isFlag) {
    return null;
   } else {
    return {
      s : true
    }
   }
  }

  validate(control: AbstractControl): ValidationErrors {
    const { value }: { value: number } = control;
    return this.init(value);
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.change = fn;
  }

}
