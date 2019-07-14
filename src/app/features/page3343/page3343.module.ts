import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3343Component } from './page3343.component';

@NgModule({
  declarations: [Page3343Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3343Component }])],
  exports: [Page3343Component]
})
export class Page3343Module {}
