import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2816Component } from './page2816.component';

@NgModule({
  declarations: [Page2816Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2816Component }])],
  exports: [Page2816Component]
})
export class Page2816Module {}
