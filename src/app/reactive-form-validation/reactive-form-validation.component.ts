import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css']
})
export class ReactiveFormValidationComponent implements OnInit {

  fg: FormGroup;

  constructor(
    public fb: FormBuilder
  ) {
    this.fg = this.fb.group({
      yanfayibu: {
        name: '研发一部',
        program: this.fb.array([
          { programName: ['', [Validators.required, Validators.minLength(4)]] },
          { programName: ['', [Validators.required, Validators.minLength(4)]] },
          { programName: ['', [Validators.required, Validators.minLength(4)]] }])
      },
      yanfaerbu: {
        name: '研发二部',
        program: this.fb.array([
          { programName: ['', [Validators.required, Validators.minLength(4)]] },
          { programName: ['', [Validators.required, Validators.minLength(4)]] },
          { programName: ['', [Validators.required, Validators.minLength(4)]] }])
      },
      yanfasanbu: {
        name: '研发三部',
        program: this.fb.array([
          { programName: ['', [Validators.required, Validators.minLength(4)]] },
          { programName: ['', [Validators.required, Validators.minLength(4)]] },
          { programName: ['', [Validators.required, Validators.minLength(4)]] }])
      },
      yanfasibu: {
        name: '研发四部',
        program: this.fb.array([
          { programName: ['', [Validators.required, Validators.minLength(4)]] },
          { programName: ['', [Validators.required, Validators.minLength(4)]] },
          { programName: ['', [Validators.required, Validators.minLength(4)]] }])
      },
      chanpinbu: {
        name: '产品部',
        program: this.fb.array([
          { programName: ['', [Validators.required, Validators.minLength(4)]] },
          { programName: ['', [Validators.required, Validators.minLength(4)]] },
          { programName: ['', [Validators.required, Validators.minLength(4)]] }])
      },
      zongheguanlibu: {
        name: '综合管理部',
        program: this.fb.array([
          { programName: ['', [Validators.required, Validators.minLength(4)]] },
          { programName: ['', [Validators.required, Validators.minLength(4)]] },
          { programName: ['', [Validators.required, Validators.minLength(4)]] }])
      }
    });
  }

  get yanfayibu() {
    console.log(this.fg.get('yanfayibu').value.program)
    return this.fg.get('yanfayibu').value.program as FormArray;
  }

  onSubmit() {

  }

  ngOnInit(): void {
  }

}
