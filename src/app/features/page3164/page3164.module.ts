import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3164Component } from './page3164.component';

@NgModule({
  declarations: [Page3164Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3164Component }])],
  exports: [Page3164Component]
})
export class Page3164Module {}
