import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2379Component } from './page2379.component';

@NgModule({
  declarations: [Page2379Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2379Component }])],
  exports: [Page2379Component]
})
export class Page2379Module {}
