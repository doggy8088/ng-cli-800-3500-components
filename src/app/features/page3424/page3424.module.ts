import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3424Component } from './page3424.component';

@NgModule({
  declarations: [Page3424Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3424Component }])],
  exports: [Page3424Component]
})
export class Page3424Module {}
