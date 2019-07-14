import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1450Component } from './page1450.component';

@NgModule({
  declarations: [Page1450Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1450Component }])],
  exports: [Page1450Component]
})
export class Page1450Module {}
