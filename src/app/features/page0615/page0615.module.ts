import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0615Component } from './page0615.component';

@NgModule({
  declarations: [Page0615Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0615Component }])],
  exports: [Page0615Component]
})
export class Page0615Module {}
