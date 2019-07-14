import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2980Component } from './page2980.component';

@NgModule({
  declarations: [Page2980Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2980Component }])],
  exports: [Page2980Component]
})
export class Page2980Module {}
