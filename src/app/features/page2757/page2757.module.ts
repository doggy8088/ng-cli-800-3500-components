import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2757Component } from './page2757.component';

@NgModule({
  declarations: [Page2757Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2757Component }])],
  exports: [Page2757Component]
})
export class Page2757Module {}
