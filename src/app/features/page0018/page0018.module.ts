import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0018Component } from './page0018.component';

@NgModule({
  declarations: [Page0018Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0018Component }])],
  exports: [Page0018Component]
})
export class Page0018Module {}
