import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1303Component } from './page1303.component';

@NgModule({
  declarations: [Page1303Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1303Component }])],
  exports: [Page1303Component]
})
export class Page1303Module {}
