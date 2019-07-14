import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3279Component } from './page3279.component';

@NgModule({
  declarations: [Page3279Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3279Component }])],
  exports: [Page3279Component]
})
export class Page3279Module {}
