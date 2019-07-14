import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3362Component } from './page3362.component';

@NgModule({
  declarations: [Page3362Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3362Component }])],
  exports: [Page3362Component]
})
export class Page3362Module {}
