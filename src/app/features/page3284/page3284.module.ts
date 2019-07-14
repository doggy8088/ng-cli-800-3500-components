import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3284Component } from './page3284.component';

@NgModule({
  declarations: [Page3284Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3284Component }])],
  exports: [Page3284Component]
})
export class Page3284Module {}
