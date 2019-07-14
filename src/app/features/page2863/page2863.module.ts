import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2863Component } from './page2863.component';

@NgModule({
  declarations: [Page2863Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2863Component }])],
  exports: [Page2863Component]
})
export class Page2863Module {}
