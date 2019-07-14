import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2459Component } from './page2459.component';

@NgModule({
  declarations: [Page2459Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2459Component }])],
  exports: [Page2459Component]
})
export class Page2459Module {}
