import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0152Component } from './page0152.component';

@NgModule({
  declarations: [Page0152Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0152Component }])],
  exports: [Page0152Component]
})
export class Page0152Module {}
