import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0877Component } from './page0877.component';

@NgModule({
  declarations: [Page0877Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0877Component }])],
  exports: [Page0877Component]
})
export class Page0877Module {}
