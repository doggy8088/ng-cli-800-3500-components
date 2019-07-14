import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0137Component } from './page0137.component';

@NgModule({
  declarations: [Page0137Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0137Component }])],
  exports: [Page0137Component]
})
export class Page0137Module {}
