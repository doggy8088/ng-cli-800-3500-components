import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3489Component } from './page3489.component';

@NgModule({
  declarations: [Page3489Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3489Component }])],
  exports: [Page3489Component]
})
export class Page3489Module {}
