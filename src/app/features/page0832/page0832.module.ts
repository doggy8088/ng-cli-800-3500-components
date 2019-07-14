import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0832Component } from './page0832.component';

@NgModule({
  declarations: [Page0832Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0832Component }])],
  exports: [Page0832Component]
})
export class Page0832Module {}
