import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2694Component } from './page2694.component';

@NgModule({
  declarations: [Page2694Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2694Component }])],
  exports: [Page2694Component]
})
export class Page2694Module {}
