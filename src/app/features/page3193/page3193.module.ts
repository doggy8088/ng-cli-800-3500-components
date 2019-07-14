import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3193Component } from './page3193.component';

@NgModule({
  declarations: [Page3193Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3193Component }])],
  exports: [Page3193Component]
})
export class Page3193Module {}
