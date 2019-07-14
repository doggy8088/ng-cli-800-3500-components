import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3009Component } from './page3009.component';

@NgModule({
  declarations: [Page3009Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3009Component }])],
  exports: [Page3009Component]
})
export class Page3009Module {}
