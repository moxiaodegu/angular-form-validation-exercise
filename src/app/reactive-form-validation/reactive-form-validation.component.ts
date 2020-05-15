import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, MinLengthValidator, ValidationErrors, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveFormValidationComponent implements OnInit {

  fg: FormGroup;

  temp: string[] = [
    '研发一部',
    '研发二部',
    '研发三部',
    '研发四部',
    '产品部',
    '综合管理部'
  ];

  constructor(
    public fb: FormBuilder,
    // private cdr: ChangeDetectorRef
  ) {
    // this.cdr.checkNoChanges();
    this.fg = this.fb.group({
      inspect_items: this.resetForm()
    });
  }

  // tslint:disable-next-line:variable-name
  resetForm(): FormArray {
    const array: FormArray = this.fb.array([]);
    this.temp.forEach(e => {
      array.push(
        this.fb.group(
          {
            name: e,
            program: this.fb.array([
              this.fb.group({ programName: ['', [Validators.required, Validators.minLength(4), this.repeatFun]] }),
              this.fb.group({ programName: ['', [Validators.required, Validators.minLength(4), this.repeatFun]] }),
              this.fb.group({ programName: ['', [Validators.required, Validators.minLength(4), this.repeatFun]] }),
            ])
          }
        )
      );
    });

    return array;
  }

  get inspect_items() {
    return this.fg.get('inspect_items') as FormArray;
  }

  del(i, s) {
    const grep = this.fg.get(['inspect_items', i, 'program']) as FormArray;
    grep.removeAt(s);
  }

  add(i) {
    // tslint:disable-next-line:max-line-length
    const temp = this.fg.get(['inspect_items', i, 'program']) as FormArray;
    temp.push(this.fb.group({ programName: ['', [Validators.required, Validators.minLength(4), this.repeatFun]] }));
  }

  repeatFun(control: AbstractControl): ValidationErrors {
    const { value }: { value: string } = control;
    const temp = [];
    const fg = control.root as FormGroup;
    const inspectItems = fg.get(['inspect_items']) as FormArray;

    let isFlag = true;

    if (inspectItems) {
      console.log(inspectItems['value']);
      inspectItems['value'].forEach(e => {
        e.program.forEach(s => {
          if (value && value === s.programName) {
            isFlag = false;
           }
        });
      });
    }

   // tslint:disable-next-line:align
   if (isFlag) {
    return null;
   } else {
    return {
      repeat : true
    };
   }
  }

  // repeatFun(control: AbstractControl): Promise<ValidationErrors> {
  //   return new Promise((resolve => {
  //     setTimeout(() => {
  //       const { value }: { value: string } = control;
  //       const temp = [];
  //       console.log(this.fg);

  //       // return ;
  //       resolve(null);
  //     }, 0);
  //   }));

  // }

  onSubmit() {

  }

  ngOnInit(): void {
  }

}
