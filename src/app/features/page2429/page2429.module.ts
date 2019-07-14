import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2429Component } from './page2429.component';

@NgModule({
  declarations: [Page2429Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2429Component }])],
  exports: [Page2429Component]
})
export class Page2429Module {}
