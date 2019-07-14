import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0931Component } from './page0931.component';

@NgModule({
  declarations: [Page0931Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0931Component }])],
  exports: [Page0931Component]
})
export class Page0931Module {}
