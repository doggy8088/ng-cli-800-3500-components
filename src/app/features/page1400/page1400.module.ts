import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1400Component } from './page1400.component';

@NgModule({
  declarations: [Page1400Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1400Component }])],
  exports: [Page1400Component]
})
export class Page1400Module {}
