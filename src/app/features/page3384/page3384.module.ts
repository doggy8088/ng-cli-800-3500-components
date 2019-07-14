import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3384Component } from './page3384.component';

@NgModule({
  declarations: [Page3384Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3384Component }])],
  exports: [Page3384Component]
})
export class Page3384Module {}
