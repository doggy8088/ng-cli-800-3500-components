import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0288Component } from './page0288.component';

@NgModule({
  declarations: [Page0288Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0288Component }])],
  exports: [Page0288Component]
})
export class Page0288Module {}
