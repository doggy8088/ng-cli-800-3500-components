import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2696Component } from './page2696.component';

@NgModule({
  declarations: [Page2696Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2696Component }])],
  exports: [Page2696Component]
})
export class Page2696Module {}
