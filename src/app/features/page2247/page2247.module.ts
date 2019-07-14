import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2247Component } from './page2247.component';

@NgModule({
  declarations: [Page2247Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2247Component }])],
  exports: [Page2247Component]
})
export class Page2247Module {}
