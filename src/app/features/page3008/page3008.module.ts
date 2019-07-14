import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3008Component } from './page3008.component';

@NgModule({
  declarations: [Page3008Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3008Component }])],
  exports: [Page3008Component]
})
export class Page3008Module {}
