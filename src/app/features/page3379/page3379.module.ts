import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3379Component } from './page3379.component';

@NgModule({
  declarations: [Page3379Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3379Component }])],
  exports: [Page3379Component]
})
export class Page3379Module {}
