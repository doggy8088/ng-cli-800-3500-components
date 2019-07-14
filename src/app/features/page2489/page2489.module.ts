import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2489Component } from './page2489.component';

@NgModule({
  declarations: [Page2489Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2489Component }])],
  exports: [Page2489Component]
})
export class Page2489Module {}
