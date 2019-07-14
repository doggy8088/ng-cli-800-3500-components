import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0926Component } from './page0926.component';

@NgModule({
  declarations: [Page0926Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0926Component }])],
  exports: [Page0926Component]
})
export class Page0926Module {}
