import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2734Component } from './page2734.component';

@NgModule({
  declarations: [Page2734Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2734Component }])],
  exports: [Page2734Component]
})
export class Page2734Module {}
