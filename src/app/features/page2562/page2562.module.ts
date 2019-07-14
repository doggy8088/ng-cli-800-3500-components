import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2562Component } from './page2562.component';

@NgModule({
  declarations: [Page2562Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2562Component }])],
  exports: [Page2562Component]
})
export class Page2562Module {}
