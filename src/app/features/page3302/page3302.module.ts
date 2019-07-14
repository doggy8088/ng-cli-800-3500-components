import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3302Component } from './page3302.component';

@NgModule({
  declarations: [Page3302Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3302Component }])],
  exports: [Page3302Component]
})
export class Page3302Module {}
