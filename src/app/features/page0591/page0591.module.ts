import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0591Component } from './page0591.component';

@NgModule({
  declarations: [Page0591Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0591Component }])],
  exports: [Page0591Component]
})
export class Page0591Module {}
