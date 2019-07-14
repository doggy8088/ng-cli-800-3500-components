import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0246Component } from './page0246.component';

@NgModule({
  declarations: [Page0246Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0246Component }])],
  exports: [Page0246Component]
})
export class Page0246Module {}
