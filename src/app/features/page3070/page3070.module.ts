import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3070Component } from './page3070.component';

@NgModule({
  declarations: [Page3070Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3070Component }])],
  exports: [Page3070Component]
})
export class Page3070Module {}
