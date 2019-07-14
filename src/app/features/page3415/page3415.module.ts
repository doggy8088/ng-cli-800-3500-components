import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3415Component } from './page3415.component';

@NgModule({
  declarations: [Page3415Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3415Component }])],
  exports: [Page3415Component]
})
export class Page3415Module {}
