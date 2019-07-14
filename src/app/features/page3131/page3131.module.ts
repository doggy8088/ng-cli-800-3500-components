import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3131Component } from './page3131.component';

@NgModule({
  declarations: [Page3131Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3131Component }])],
  exports: [Page3131Component]
})
export class Page3131Module {}
