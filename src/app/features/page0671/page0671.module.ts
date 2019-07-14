import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0671Component } from './page0671.component';

@NgModule({
  declarations: [Page0671Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0671Component }])],
  exports: [Page0671Component]
})
export class Page0671Module {}
