import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3423Component } from './page3423.component';

@NgModule({
  declarations: [Page3423Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3423Component }])],
  exports: [Page3423Component]
})
export class Page3423Module {}
