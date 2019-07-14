import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0514Component } from './page0514.component';

@NgModule({
  declarations: [Page0514Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0514Component }])],
  exports: [Page0514Component]
})
export class Page0514Module {}
