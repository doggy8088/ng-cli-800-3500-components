import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3124Component } from './page3124.component';

@NgModule({
  declarations: [Page3124Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3124Component }])],
  exports: [Page3124Component]
})
export class Page3124Module {}
