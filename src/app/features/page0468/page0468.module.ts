import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0468Component } from './page0468.component';

@NgModule({
  declarations: [Page0468Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0468Component }])],
  exports: [Page0468Component]
})
export class Page0468Module {}
