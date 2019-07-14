import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2626Component } from './page2626.component';

@NgModule({
  declarations: [Page2626Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2626Component }])],
  exports: [Page2626Component]
})
export class Page2626Module {}
