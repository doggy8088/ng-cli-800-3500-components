import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3107Component } from './page3107.component';

@NgModule({
  declarations: [Page3107Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3107Component }])],
  exports: [Page3107Component]
})
export class Page3107Module {}
