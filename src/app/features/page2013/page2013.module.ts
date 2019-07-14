import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2013Component } from './page2013.component';

@NgModule({
  declarations: [Page2013Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2013Component }])],
  exports: [Page2013Component]
})
export class Page2013Module {}
