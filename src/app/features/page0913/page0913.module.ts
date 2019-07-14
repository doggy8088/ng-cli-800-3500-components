import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0913Component } from './page0913.component';

@NgModule({
  declarations: [Page0913Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0913Component }])],
  exports: [Page0913Component]
})
export class Page0913Module {}
