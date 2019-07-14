import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0759Component } from './page0759.component';

@NgModule({
  declarations: [Page0759Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0759Component }])],
  exports: [Page0759Component]
})
export class Page0759Module {}
