import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2132Component } from './page2132.component';

@NgModule({
  declarations: [Page2132Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2132Component }])],
  exports: [Page2132Component]
})
export class Page2132Module {}
