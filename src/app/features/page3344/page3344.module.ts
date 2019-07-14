import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3344Component } from './page3344.component';

@NgModule({
  declarations: [Page3344Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3344Component }])],
  exports: [Page3344Component]
})
export class Page3344Module {}
