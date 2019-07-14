import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3290Component } from './page3290.component';

@NgModule({
  declarations: [Page3290Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3290Component }])],
  exports: [Page3290Component]
})
export class Page3290Module {}
