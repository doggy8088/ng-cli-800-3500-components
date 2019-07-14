import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3425Component } from './page3425.component';

@NgModule({
  declarations: [Page3425Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3425Component }])],
  exports: [Page3425Component]
})
export class Page3425Module {}
