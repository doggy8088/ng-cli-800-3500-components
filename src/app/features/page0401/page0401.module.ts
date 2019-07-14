import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0401Component } from './page0401.component';

@NgModule({
  declarations: [Page0401Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0401Component }])],
  exports: [Page0401Component]
})
export class Page0401Module {}
