import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0517Component } from './page0517.component';

@NgModule({
  declarations: [Page0517Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0517Component }])],
  exports: [Page0517Component]
})
export class Page0517Module {}
