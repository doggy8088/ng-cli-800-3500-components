import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1509Component } from './page1509.component';

@NgModule({
  declarations: [Page1509Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1509Component }])],
  exports: [Page1509Component]
})
export class Page1509Module {}
