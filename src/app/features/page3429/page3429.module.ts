import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3429Component } from './page3429.component';

@NgModule({
  declarations: [Page3429Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3429Component }])],
  exports: [Page3429Component]
})
export class Page3429Module {}
