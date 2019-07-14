import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3417Component } from './page3417.component';

@NgModule({
  declarations: [Page3417Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3417Component }])],
  exports: [Page3417Component]
})
export class Page3417Module {}
