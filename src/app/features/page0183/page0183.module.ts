import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0183Component } from './page0183.component';

@NgModule({
  declarations: [Page0183Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0183Component }])],
  exports: [Page0183Component]
})
export class Page0183Module {}
