import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2770Component } from './page2770.component';

@NgModule({
  declarations: [Page2770Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2770Component }])],
  exports: [Page2770Component]
})
export class Page2770Module {}
