import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3081Component } from './page3081.component';

@NgModule({
  declarations: [Page3081Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3081Component }])],
  exports: [Page3081Component]
})
export class Page3081Module {}
