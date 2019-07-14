import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0682Component } from './page0682.component';

@NgModule({
  declarations: [Page0682Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0682Component }])],
  exports: [Page0682Component]
})
export class Page0682Module {}
