import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1015Component } from './page1015.component';

@NgModule({
  declarations: [Page1015Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1015Component }])],
  exports: [Page1015Component]
})
export class Page1015Module {}
