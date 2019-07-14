import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0149Component } from './page0149.component';

@NgModule({
  declarations: [Page0149Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0149Component }])],
  exports: [Page0149Component]
})
export class Page0149Module {}
