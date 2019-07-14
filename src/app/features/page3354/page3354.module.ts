import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3354Component } from './page3354.component';

@NgModule({
  declarations: [Page3354Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3354Component }])],
  exports: [Page3354Component]
})
export class Page3354Module {}
