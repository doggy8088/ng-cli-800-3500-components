import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2290Component } from './page2290.component';

@NgModule({
  declarations: [Page2290Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2290Component }])],
  exports: [Page2290Component]
})
export class Page2290Module {}
