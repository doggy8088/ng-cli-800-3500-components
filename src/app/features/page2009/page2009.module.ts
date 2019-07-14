import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2009Component } from './page2009.component';

@NgModule({
  declarations: [Page2009Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2009Component }])],
  exports: [Page2009Component]
})
export class Page2009Module {}
