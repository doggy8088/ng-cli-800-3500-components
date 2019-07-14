import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0212Component } from './page0212.component';

@NgModule({
  declarations: [Page0212Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0212Component }])],
  exports: [Page0212Component]
})
export class Page0212Module {}
