import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1327Component } from './page1327.component';

@NgModule({
  declarations: [Page1327Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1327Component }])],
  exports: [Page1327Component]
})
export class Page1327Module {}
