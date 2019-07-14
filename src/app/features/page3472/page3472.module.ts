import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3472Component } from './page3472.component';

@NgModule({
  declarations: [Page3472Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3472Component }])],
  exports: [Page3472Component]
})
export class Page3472Module {}
