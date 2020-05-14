import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-validation',
  templateUrl: './template-driven-validation.component.html',
  styleUrls: ['./template-driven-validation.component.css']
})
export class TemplateDrivenValidationComponent implements OnInit {

  constructor() { }

  data: {}[] = [
    {
      name: '研发一部',
      program: [
        { programName: '' },
        { programName: '' },
        { programName: '' },
      ]
    },
    {
      name: '研发二部',
      program: [
        { programName: '' },
        { programName: '' },
        { programName: '' },
      ]
    },
    {
      name: '研发三部',
      program: [
        { programName: '' },
        { programName: '' },
        { programName: '' },
      ]
    },
    {
      name: '研发四部',
      program: [
        { programName: '' },
        { programName: '' },
        { programName: '' },
      ]
    },
    {
      name: '产品部',
      program: [
        { programName: '' },
        { programName: '' },
        { programName: '' },
      ]
    },
    {
      name: '综合管理部',
      program: [
        { programName: '' },
        { programName: '' },
        { programName: '' },
      ]
    }
  ];

  add(i) {
    this.data[i]['program'].push({ programName: '' });
  }

  del(i, s) {
    this.data[i]['program'].splice(s, 1);
  }

  onSubmit() {

  }

  ngOnInit(): void {
  }

}
