import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2803Component } from './page2803.component';

@NgModule({
  declarations: [Page2803Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2803Component }])],
  exports: [Page2803Component]
})
export class Page2803Module {}
