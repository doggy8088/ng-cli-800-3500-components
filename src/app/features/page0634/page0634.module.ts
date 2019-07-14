import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0634Component } from './page0634.component';

@NgModule({
  declarations: [Page0634Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0634Component }])],
  exports: [Page0634Component]
})
export class Page0634Module {}
