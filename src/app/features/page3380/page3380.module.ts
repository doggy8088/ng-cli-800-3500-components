import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3380Component } from './page3380.component';

@NgModule({
  declarations: [Page3380Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3380Component }])],
  exports: [Page3380Component]
})
export class Page3380Module {}
