import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1188Component } from './page1188.component';

@NgModule({
  declarations: [Page1188Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1188Component }])],
  exports: [Page1188Component]
})
export class Page1188Module {}
