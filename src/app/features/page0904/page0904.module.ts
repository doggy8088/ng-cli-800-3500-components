import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0904Component } from './page0904.component';

@NgModule({
  declarations: [Page0904Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0904Component }])],
  exports: [Page0904Component]
})
export class Page0904Module {}
