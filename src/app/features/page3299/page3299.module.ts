import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3299Component } from './page3299.component';

@NgModule({
  declarations: [Page3299Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3299Component }])],
  exports: [Page3299Component]
})
export class Page3299Module {}
