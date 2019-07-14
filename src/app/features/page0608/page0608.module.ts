import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0608Component } from './page0608.component';

@NgModule({
  declarations: [Page0608Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0608Component }])],
  exports: [Page0608Component]
})
export class Page0608Module {}
