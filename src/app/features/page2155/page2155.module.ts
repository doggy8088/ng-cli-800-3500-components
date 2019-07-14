import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2155Component } from './page2155.component';

@NgModule({
  declarations: [Page2155Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2155Component }])],
  exports: [Page2155Component]
})
export class Page2155Module {}
