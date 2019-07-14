import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2914Component } from './page2914.component';

@NgModule({
  declarations: [Page2914Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2914Component }])],
  exports: [Page2914Component]
})
export class Page2914Module {}
