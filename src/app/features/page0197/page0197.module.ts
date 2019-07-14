import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0197Component } from './page0197.component';

@NgModule({
  declarations: [Page0197Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0197Component }])],
  exports: [Page0197Component]
})
export class Page0197Module {}
