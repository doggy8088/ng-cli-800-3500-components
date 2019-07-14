import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2012Component } from './page2012.component';

@NgModule({
  declarations: [Page2012Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2012Component }])],
  exports: [Page2012Component]
})
export class Page2012Module {}
