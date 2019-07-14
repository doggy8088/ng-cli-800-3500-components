import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1958Component } from './page1958.component';

@NgModule({
  declarations: [Page1958Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1958Component }])],
  exports: [Page1958Component]
})
export class Page1958Module {}
