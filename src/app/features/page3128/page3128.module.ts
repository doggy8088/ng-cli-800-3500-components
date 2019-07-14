import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3128Component } from './page3128.component';

@NgModule({
  declarations: [Page3128Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3128Component }])],
  exports: [Page3128Component]
})
export class Page3128Module {}
