import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3155Component } from './page3155.component';

@NgModule({
  declarations: [Page3155Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3155Component }])],
  exports: [Page3155Component]
})
export class Page3155Module {}
