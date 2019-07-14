import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2865Component } from './page2865.component';

@NgModule({
  declarations: [Page2865Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2865Component }])],
  exports: [Page2865Component]
})
export class Page2865Module {}
