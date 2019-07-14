import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0770Component } from './page0770.component';

@NgModule({
  declarations: [Page0770Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0770Component }])],
  exports: [Page0770Component]
})
export class Page0770Module {}
