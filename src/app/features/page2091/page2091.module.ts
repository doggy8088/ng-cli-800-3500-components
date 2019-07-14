import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2091Component } from './page2091.component';

@NgModule({
  declarations: [Page2091Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2091Component }])],
  exports: [Page2091Component]
})
export class Page2091Module {}
