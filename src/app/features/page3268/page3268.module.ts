import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3268Component } from './page3268.component';

@NgModule({
  declarations: [Page3268Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3268Component }])],
  exports: [Page3268Component]
})
export class Page3268Module {}
