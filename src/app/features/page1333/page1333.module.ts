import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1333Component } from './page1333.component';

@NgModule({
  declarations: [Page1333Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1333Component }])],
  exports: [Page1333Component]
})
export class Page1333Module {}
