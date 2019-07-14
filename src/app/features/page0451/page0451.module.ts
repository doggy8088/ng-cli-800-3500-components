import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0451Component } from './page0451.component';

@NgModule({
  declarations: [Page0451Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0451Component }])],
  exports: [Page0451Component]
})
export class Page0451Module {}
