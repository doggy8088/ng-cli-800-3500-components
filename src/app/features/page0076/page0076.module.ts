import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0076Component } from './page0076.component';

@NgModule({
  declarations: [Page0076Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0076Component }])],
  exports: [Page0076Component]
})
export class Page0076Module {}
