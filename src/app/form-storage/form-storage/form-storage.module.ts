import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormStorageDirective } from './form-storage.directive';



@NgModule({
  imports: [CommonModule],
  declarations: [FormStorageDirective],
  exports: [FormStorageDirective],
})
export class FormStorageModule { }
