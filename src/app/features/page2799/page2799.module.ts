import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2799Component } from './page2799.component';

@NgModule({
  declarations: [Page2799Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2799Component }])],
  exports: [Page2799Component]
})
export class Page2799Module {}
