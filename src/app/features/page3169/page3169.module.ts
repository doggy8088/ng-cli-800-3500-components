import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3169Component } from './page3169.component';

@NgModule({
  declarations: [Page3169Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3169Component }])],
  exports: [Page3169Component]
})
export class Page3169Module {}
