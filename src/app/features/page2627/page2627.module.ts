import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2627Component } from './page2627.component';

@NgModule({
  declarations: [Page2627Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2627Component }])],
  exports: [Page2627Component]
})
export class Page2627Module {}
