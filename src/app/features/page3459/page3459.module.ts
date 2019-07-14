import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3459Component } from './page3459.component';

@NgModule({
  declarations: [Page3459Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3459Component }])],
  exports: [Page3459Component]
})
export class Page3459Module {}
