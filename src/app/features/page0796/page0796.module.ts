import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0796Component } from './page0796.component';

@NgModule({
  declarations: [Page0796Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0796Component }])],
  exports: [Page0796Component]
})
export class Page0796Module {}
