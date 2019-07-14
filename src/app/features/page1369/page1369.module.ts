import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1369Component } from './page1369.component';

@NgModule({
  declarations: [Page1369Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1369Component }])],
  exports: [Page1369Component]
})
export class Page1369Module {}
