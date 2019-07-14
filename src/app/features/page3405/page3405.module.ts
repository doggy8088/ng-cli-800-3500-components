import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3405Component } from './page3405.component';

@NgModule({
  declarations: [Page3405Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3405Component }])],
  exports: [Page3405Component]
})
export class Page3405Module {}
