import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0539Component } from './page0539.component';

@NgModule({
  declarations: [Page0539Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0539Component }])],
  exports: [Page0539Component]
})
export class Page0539Module {}
