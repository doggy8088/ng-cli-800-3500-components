import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0181Component } from './page0181.component';

@NgModule({
  declarations: [Page0181Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0181Component }])],
  exports: [Page0181Component]
})
export class Page0181Module {}
