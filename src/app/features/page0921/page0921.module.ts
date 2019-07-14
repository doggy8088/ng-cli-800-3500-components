import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0921Component } from './page0921.component';

@NgModule({
  declarations: [Page0921Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0921Component }])],
  exports: [Page0921Component]
})
export class Page0921Module {}
