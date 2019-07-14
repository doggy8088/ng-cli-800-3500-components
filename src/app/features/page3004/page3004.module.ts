import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3004Component } from './page3004.component';

@NgModule({
  declarations: [Page3004Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3004Component }])],
  exports: [Page3004Component]
})
export class Page3004Module {}
