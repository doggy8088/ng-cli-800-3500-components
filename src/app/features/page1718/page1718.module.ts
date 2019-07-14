import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1718Component } from './page1718.component';

@NgModule({
  declarations: [Page1718Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1718Component }])],
  exports: [Page1718Component]
})
export class Page1718Module {}
