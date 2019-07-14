import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3416Component } from './page3416.component';

@NgModule({
  declarations: [Page3416Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3416Component }])],
  exports: [Page3416Component]
})
export class Page3416Module {}
