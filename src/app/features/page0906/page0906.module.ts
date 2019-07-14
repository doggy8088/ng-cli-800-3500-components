import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0906Component } from './page0906.component';

@NgModule({
  declarations: [Page0906Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0906Component }])],
  exports: [Page0906Component]
})
export class Page0906Module {}
