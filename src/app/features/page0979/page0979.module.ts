import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0979Component } from './page0979.component';

@NgModule({
  declarations: [Page0979Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0979Component }])],
  exports: [Page0979Component]
})
export class Page0979Module {}
