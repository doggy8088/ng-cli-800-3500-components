import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0300Component } from './page0300.component';

@NgModule({
  declarations: [Page0300Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0300Component }])],
  exports: [Page0300Component]
})
export class Page0300Module {}
