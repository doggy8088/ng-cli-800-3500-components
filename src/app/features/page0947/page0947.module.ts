import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0947Component } from './page0947.component';

@NgModule({
  declarations: [Page0947Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0947Component }])],
  exports: [Page0947Component]
})
export class Page0947Module {}
