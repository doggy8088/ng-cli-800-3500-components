import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0844Component } from './page0844.component';

@NgModule({
  declarations: [Page0844Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0844Component }])],
  exports: [Page0844Component]
})
export class Page0844Module {}
