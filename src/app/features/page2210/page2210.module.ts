import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2210Component } from './page2210.component';

@NgModule({
  declarations: [Page2210Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2210Component }])],
  exports: [Page2210Component]
})
export class Page2210Module {}
