import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3084Component } from './page3084.component';

@NgModule({
  declarations: [Page3084Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3084Component }])],
  exports: [Page3084Component]
})
export class Page3084Module {}
