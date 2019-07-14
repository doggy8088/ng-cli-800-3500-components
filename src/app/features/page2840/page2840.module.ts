import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2840Component } from './page2840.component';

@NgModule({
  declarations: [Page2840Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2840Component }])],
  exports: [Page2840Component]
})
export class Page2840Module {}
