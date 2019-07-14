import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2301Component } from './page2301.component';

@NgModule({
  declarations: [Page2301Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2301Component }])],
  exports: [Page2301Component]
})
export class Page2301Module {}
