import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0509Component } from './page0509.component';

@NgModule({
  declarations: [Page0509Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0509Component }])],
  exports: [Page0509Component]
})
export class Page0509Module {}
