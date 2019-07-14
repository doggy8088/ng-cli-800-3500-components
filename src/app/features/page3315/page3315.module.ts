import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3315Component } from './page3315.component';

@NgModule({
  declarations: [Page3315Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3315Component }])],
  exports: [Page3315Component]
})
export class Page3315Module {}
