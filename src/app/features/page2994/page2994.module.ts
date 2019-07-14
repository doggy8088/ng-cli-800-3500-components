import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2994Component } from './page2994.component';

@NgModule({
  declarations: [Page2994Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2994Component }])],
  exports: [Page2994Component]
})
export class Page2994Module {}
