import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2232Component } from './page2232.component';

@NgModule({
  declarations: [Page2232Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2232Component }])],
  exports: [Page2232Component]
})
export class Page2232Module {}
