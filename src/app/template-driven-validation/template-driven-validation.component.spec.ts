import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenValidationComponent } from './template-driven-validation.component';

describe('TemplateDrivenValidationComponent', () => {
  let component: TemplateDrivenValidationComponent;
  let fixture: ComponentFixture<TemplateDrivenValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
