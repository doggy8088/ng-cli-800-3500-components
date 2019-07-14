import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3364Component } from './page3364.component';

@NgModule({
  declarations: [Page3364Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3364Component }])],
  exports: [Page3364Component]
})
export class Page3364Module {}
