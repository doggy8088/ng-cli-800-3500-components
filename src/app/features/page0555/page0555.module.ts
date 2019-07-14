import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0555Component } from './page0555.component';

@NgModule({
  declarations: [Page0555Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0555Component }])],
  exports: [Page0555Component]
})
export class Page0555Module {}
