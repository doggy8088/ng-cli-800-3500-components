import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0115Component } from './page0115.component';

@NgModule({
  declarations: [Page0115Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0115Component }])],
  exports: [Page0115Component]
})
export class Page0115Module {}
