import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1630Component } from './page1630.component';

@NgModule({
  declarations: [Page1630Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1630Component }])],
  exports: [Page1630Component]
})
export class Page1630Module {}
