import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0851Component } from './page0851.component';

@NgModule({
  declarations: [Page0851Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0851Component }])],
  exports: [Page0851Component]
})
export class Page0851Module {}
