import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0819Component } from './page0819.component';

@NgModule({
  declarations: [Page0819Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0819Component }])],
  exports: [Page0819Component]
})
export class Page0819Module {}
