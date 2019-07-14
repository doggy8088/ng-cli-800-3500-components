import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0092Component } from './page0092.component';

@NgModule({
  declarations: [Page0092Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0092Component }])],
  exports: [Page0092Component]
})
export class Page0092Module {}
