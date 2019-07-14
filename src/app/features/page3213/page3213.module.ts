import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3213Component } from './page3213.component';

@NgModule({
  declarations: [Page3213Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3213Component }])],
  exports: [Page3213Component]
})
export class Page3213Module {}
