import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2008Component } from './page2008.component';

@NgModule({
  declarations: [Page2008Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2008Component }])],
  exports: [Page2008Component]
})
export class Page2008Module {}
