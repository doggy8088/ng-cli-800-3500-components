import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3043Component } from './page3043.component';

@NgModule({
  declarations: [Page3043Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3043Component }])],
  exports: [Page3043Component]
})
export class Page3043Module {}
