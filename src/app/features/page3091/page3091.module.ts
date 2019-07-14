import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3091Component } from './page3091.component';

@NgModule({
  declarations: [Page3091Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3091Component }])],
  exports: [Page3091Component]
})
export class Page3091Module {}
