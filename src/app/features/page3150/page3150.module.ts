import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3150Component } from './page3150.component';

@NgModule({
  declarations: [Page3150Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3150Component }])],
  exports: [Page3150Component]
})
export class Page3150Module {}
