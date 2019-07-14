import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3232Component } from './page3232.component';

@NgModule({
  declarations: [Page3232Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3232Component }])],
  exports: [Page3232Component]
})
export class Page3232Module {}
