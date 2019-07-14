import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0096Component } from './page0096.component';

@NgModule({
  declarations: [Page0096Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0096Component }])],
  exports: [Page0096Component]
})
export class Page0096Module {}
