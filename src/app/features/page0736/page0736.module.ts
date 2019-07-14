import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0736Component } from './page0736.component';

@NgModule({
  declarations: [Page0736Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0736Component }])],
  exports: [Page0736Component]
})
export class Page0736Module {}
