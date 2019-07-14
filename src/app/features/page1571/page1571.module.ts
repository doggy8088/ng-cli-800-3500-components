import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1571Component } from './page1571.component';

@NgModule({
  declarations: [Page1571Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1571Component }])],
  exports: [Page1571Component]
})
export class Page1571Module {}
