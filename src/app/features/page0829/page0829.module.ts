import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0829Component } from './page0829.component';

@NgModule({
  declarations: [Page0829Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0829Component }])],
  exports: [Page0829Component]
})
export class Page0829Module {}
