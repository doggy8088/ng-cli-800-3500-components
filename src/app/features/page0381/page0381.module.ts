import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0381Component } from './page0381.component';

@NgModule({
  declarations: [Page0381Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0381Component }])],
  exports: [Page0381Component]
})
export class Page0381Module {}
