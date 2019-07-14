import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3499Component } from './page3499.component';

@NgModule({
  declarations: [Page3499Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3499Component }])],
  exports: [Page3499Component]
})
export class Page3499Module {}
