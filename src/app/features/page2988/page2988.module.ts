import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2988Component } from './page2988.component';

@NgModule({
  declarations: [Page2988Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2988Component }])],
  exports: [Page2988Component]
})
export class Page2988Module {}
