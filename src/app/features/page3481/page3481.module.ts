import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3481Component } from './page3481.component';

@NgModule({
  declarations: [Page3481Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3481Component }])],
  exports: [Page3481Component]
})
export class Page3481Module {}
