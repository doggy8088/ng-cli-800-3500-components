import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3103Component } from './page3103.component';

@NgModule({
  declarations: [Page3103Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3103Component }])],
  exports: [Page3103Component]
})
export class Page3103Module {}
