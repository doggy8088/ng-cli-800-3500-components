import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1459Component } from './page1459.component';

@NgModule({
  declarations: [Page1459Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1459Component }])],
  exports: [Page1459Component]
})
export class Page1459Module {}
