import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContainerDadosPessoaisComponent } from './form-container-dados-pessoais.component';

describe('FormContainerDadosPessoaisComponent', () => {
  let component: FormContainerDadosPessoaisComponent;
  let fixture: ComponentFixture<FormContainerDadosPessoaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormContainerDadosPessoaisComponent]
    });
    fixture = TestBed.createComponent(FormContainerDadosPessoaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
