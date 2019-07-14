import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0568Component } from './page0568.component';

@NgModule({
  declarations: [Page0568Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0568Component }])],
  exports: [Page0568Component]
})
export class Page0568Module {}
