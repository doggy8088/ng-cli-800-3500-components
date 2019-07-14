import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2460Component } from './page2460.component';

@NgModule({
  declarations: [Page2460Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2460Component }])],
  exports: [Page2460Component]
})
export class Page2460Module {}
