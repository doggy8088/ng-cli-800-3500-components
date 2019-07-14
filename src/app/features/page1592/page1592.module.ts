import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1592Component } from './page1592.component';

@NgModule({
  declarations: [Page1592Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1592Component }])],
  exports: [Page1592Component]
})
export class Page1592Module {}
