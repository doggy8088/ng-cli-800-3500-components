import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0654Component } from './page0654.component';

@NgModule({
  declarations: [Page0654Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0654Component }])],
  exports: [Page0654Component]
})
export class Page0654Module {}
