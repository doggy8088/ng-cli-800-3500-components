import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1650Component } from './page1650.component';

@NgModule({
  declarations: [Page1650Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1650Component }])],
  exports: [Page1650Component]
})
export class Page1650Module {}
