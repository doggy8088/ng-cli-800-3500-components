import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0977Component } from './page0977.component';

@NgModule({
  declarations: [Page0977Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0977Component }])],
  exports: [Page0977Component]
})
export class Page0977Module {}
