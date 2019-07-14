import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2824Component } from './page2824.component';

@NgModule({
  declarations: [Page2824Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2824Component }])],
  exports: [Page2824Component]
})
export class Page2824Module {}
