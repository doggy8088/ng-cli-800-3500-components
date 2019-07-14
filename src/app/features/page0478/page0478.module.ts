import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0478Component } from './page0478.component';

@NgModule({
  declarations: [Page0478Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0478Component }])],
  exports: [Page0478Component]
})
export class Page0478Module {}
