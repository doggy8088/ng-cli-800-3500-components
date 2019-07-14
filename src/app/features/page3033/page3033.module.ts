import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3033Component } from './page3033.component';

@NgModule({
  declarations: [Page3033Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3033Component }])],
  exports: [Page3033Component]
})
export class Page3033Module {}
