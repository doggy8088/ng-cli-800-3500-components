import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3286Component } from './page3286.component';

@NgModule({
  declarations: [Page3286Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3286Component }])],
  exports: [Page3286Component]
})
export class Page3286Module {}
