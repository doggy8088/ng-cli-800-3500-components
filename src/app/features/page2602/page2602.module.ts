import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2602Component } from './page2602.component';

@NgModule({
  declarations: [Page2602Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2602Component }])],
  exports: [Page2602Component]
})
export class Page2602Module {}
