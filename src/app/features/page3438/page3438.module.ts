import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3438Component } from './page3438.component';

@NgModule({
  declarations: [Page3438Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3438Component }])],
  exports: [Page3438Component]
})
export class Page3438Module {}
