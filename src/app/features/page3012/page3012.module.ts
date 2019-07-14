import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3012Component } from './page3012.component';

@NgModule({
  declarations: [Page3012Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3012Component }])],
  exports: [Page3012Component]
})
export class Page3012Module {}
