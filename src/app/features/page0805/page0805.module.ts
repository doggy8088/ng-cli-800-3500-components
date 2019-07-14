import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0805Component } from './page0805.component';

@NgModule({
  declarations: [Page0805Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0805Component }])],
  exports: [Page0805Component]
})
export class Page0805Module {}
