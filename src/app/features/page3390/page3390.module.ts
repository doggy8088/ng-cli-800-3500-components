import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3390Component } from './page3390.component';

@NgModule({
  declarations: [Page3390Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3390Component }])],
  exports: [Page3390Component]
})
export class Page3390Module {}
