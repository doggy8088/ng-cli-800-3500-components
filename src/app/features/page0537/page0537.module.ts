import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0537Component } from './page0537.component';

@NgModule({
  declarations: [Page0537Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0537Component }])],
  exports: [Page0537Component]
})
export class Page0537Module {}
