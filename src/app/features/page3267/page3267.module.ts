import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3267Component } from './page3267.component';

@NgModule({
  declarations: [Page3267Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3267Component }])],
  exports: [Page3267Component]
})
export class Page3267Module {}
