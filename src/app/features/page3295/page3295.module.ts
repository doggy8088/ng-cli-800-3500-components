import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3295Component } from './page3295.component';

@NgModule({
  declarations: [Page3295Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3295Component }])],
  exports: [Page3295Component]
})
export class Page3295Module {}
