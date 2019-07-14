import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0065Component } from './page0065.component';

@NgModule({
  declarations: [Page0065Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0065Component }])],
  exports: [Page0065Component]
})
export class Page0065Module {}
