import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1717Component } from './page1717.component';

@NgModule({
  declarations: [Page1717Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1717Component }])],
  exports: [Page1717Component]
})
export class Page1717Module {}
