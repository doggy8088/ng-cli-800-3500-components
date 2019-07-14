import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0987Component } from './page0987.component';

@NgModule({
  declarations: [Page0987Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0987Component }])],
  exports: [Page0987Component]
})
export class Page0987Module {}
