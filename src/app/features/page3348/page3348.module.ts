import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3348Component } from './page3348.component';

@NgModule({
  declarations: [Page3348Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3348Component }])],
  exports: [Page3348Component]
})
export class Page3348Module {}
