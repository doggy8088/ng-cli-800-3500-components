import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0892Component } from './page0892.component';

@NgModule({
  declarations: [Page0892Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0892Component }])],
  exports: [Page0892Component]
})
export class Page0892Module {}
