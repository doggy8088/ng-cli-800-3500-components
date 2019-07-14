import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3431Component } from './page3431.component';

@NgModule({
  declarations: [Page3431Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3431Component }])],
  exports: [Page3431Component]
})
export class Page3431Module {}
