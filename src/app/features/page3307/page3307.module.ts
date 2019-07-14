import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3307Component } from './page3307.component';

@NgModule({
  declarations: [Page3307Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3307Component }])],
  exports: [Page3307Component]
})
export class Page3307Module {}
