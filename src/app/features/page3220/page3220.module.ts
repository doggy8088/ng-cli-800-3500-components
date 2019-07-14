import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3220Component } from './page3220.component';

@NgModule({
  declarations: [Page3220Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3220Component }])],
  exports: [Page3220Component]
})
export class Page3220Module {}
