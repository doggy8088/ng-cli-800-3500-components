import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1377Component } from './page1377.component';

@NgModule({
  declarations: [Page1377Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1377Component }])],
  exports: [Page1377Component]
})
export class Page1377Module {}
