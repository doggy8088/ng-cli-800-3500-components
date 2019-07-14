import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3281Component } from './page3281.component';

@NgModule({
  declarations: [Page3281Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3281Component }])],
  exports: [Page3281Component]
})
export class Page3281Module {}
