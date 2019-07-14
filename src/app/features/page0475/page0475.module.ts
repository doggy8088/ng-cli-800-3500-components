import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0475Component } from './page0475.component';

@NgModule({
  declarations: [Page0475Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0475Component }])],
  exports: [Page0475Component]
})
export class Page0475Module {}
