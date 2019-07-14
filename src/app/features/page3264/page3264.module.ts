import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3264Component } from './page3264.component';

@NgModule({
  declarations: [Page3264Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3264Component }])],
  exports: [Page3264Component]
})
export class Page3264Module {}
