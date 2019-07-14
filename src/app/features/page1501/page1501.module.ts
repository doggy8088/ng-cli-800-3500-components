import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1501Component } from './page1501.component';

@NgModule({
  declarations: [Page1501Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1501Component }])],
  exports: [Page1501Component]
})
export class Page1501Module {}
