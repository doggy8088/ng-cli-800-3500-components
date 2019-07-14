import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0625Component } from './page0625.component';

@NgModule({
  declarations: [Page0625Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0625Component }])],
  exports: [Page0625Component]
})
export class Page0625Module {}
