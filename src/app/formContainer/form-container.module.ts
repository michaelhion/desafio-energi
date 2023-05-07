import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormContainerRoutingModule } from './form-container-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormContainerComponent } from './form-container.component';
import { FormStorageModule } from '../form-storage/form-storage/form-storage.module';


@NgModule({
  declarations: [
    FormContainerComponent,
  ],
  imports: [
    CommonModule,
    FormContainerRoutingModule,
    ReactiveFormsModule,
    FormStorageModule
    
  ]
})
export class FormContainerModule { }
