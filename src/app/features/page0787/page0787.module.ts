import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0787Component } from './page0787.component';

@NgModule({
  declarations: [Page0787Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0787Component }])],
  exports: [Page0787Component]
})
export class Page0787Module {}
