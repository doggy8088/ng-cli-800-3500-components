import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3400Component } from './page3400.component';

@NgModule({
  declarations: [Page3400Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3400Component }])],
  exports: [Page3400Component]
})
export class Page3400Module {}
