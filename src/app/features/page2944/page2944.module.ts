import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2944Component } from './page2944.component';

@NgModule({
  declarations: [Page2944Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2944Component }])],
  exports: [Page2944Component]
})
export class Page2944Module {}
