import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2784Component } from './page2784.component';

@NgModule({
  declarations: [Page2784Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2784Component }])],
  exports: [Page2784Component]
})
export class Page2784Module {}
