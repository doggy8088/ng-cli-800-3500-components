import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3235Component } from './page3235.component';

@NgModule({
  declarations: [Page3235Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3235Component }])],
  exports: [Page3235Component]
})
export class Page3235Module {}
