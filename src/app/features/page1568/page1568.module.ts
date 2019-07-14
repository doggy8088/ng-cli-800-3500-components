import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1568Component } from './page1568.component';

@NgModule({
  declarations: [Page1568Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1568Component }])],
  exports: [Page1568Component]
})
export class Page1568Module {}
