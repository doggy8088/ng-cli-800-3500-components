import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1945Component } from './page1945.component';

@NgModule({
  declarations: [Page1945Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1945Component }])],
  exports: [Page1945Component]
})
export class Page1945Module {}
