import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0985Component } from './page0985.component';

@NgModule({
  declarations: [Page0985Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0985Component }])],
  exports: [Page0985Component]
})
export class Page0985Module {}
