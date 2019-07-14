import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0742Component } from './page0742.component';

@NgModule({
  declarations: [Page0742Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0742Component }])],
  exports: [Page0742Component]
})
export class Page0742Module {}
