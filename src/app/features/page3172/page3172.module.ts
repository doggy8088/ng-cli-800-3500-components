import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3172Component } from './page3172.component';

@NgModule({
  declarations: [Page3172Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3172Component }])],
  exports: [Page3172Component]
})
export class Page3172Module {}
