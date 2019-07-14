import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3374Component } from './page3374.component';

@NgModule({
  declarations: [Page3374Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3374Component }])],
  exports: [Page3374Component]
})
export class Page3374Module {}
