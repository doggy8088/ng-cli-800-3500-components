import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0029Component } from './page0029.component';

@NgModule({
  declarations: [Page0029Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0029Component }])],
  exports: [Page0029Component]
})
export class Page0029Module {}
