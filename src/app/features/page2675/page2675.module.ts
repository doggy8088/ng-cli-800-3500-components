import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2675Component } from './page2675.component';

@NgModule({
  declarations: [Page2675Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2675Component }])],
  exports: [Page2675Component]
})
export class Page2675Module {}
