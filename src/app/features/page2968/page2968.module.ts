import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2968Component } from './page2968.component';

@NgModule({
  declarations: [Page2968Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2968Component }])],
  exports: [Page2968Component]
})
export class Page2968Module {}
