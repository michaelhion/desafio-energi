import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContainerEnderecoComponent } from './form-container-endereco.component';

describe('FormContainerEnderecoComponent', () => {
  let component: FormContainerEnderecoComponent;
  let fixture: ComponentFixture<FormContainerEnderecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormContainerEnderecoComponent]
    });
    fixture = TestBed.createComponent(FormContainerEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
