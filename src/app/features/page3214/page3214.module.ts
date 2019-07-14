import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3214Component } from './page3214.component';

@NgModule({
  declarations: [Page3214Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3214Component }])],
  exports: [Page3214Component]
})
export class Page3214Module {}
