import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2399Component } from './page2399.component';

@NgModule({
  declarations: [Page2399Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2399Component }])],
  exports: [Page2399Component]
})
export class Page2399Module {}
