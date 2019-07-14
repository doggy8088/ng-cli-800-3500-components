import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0256Component } from './page0256.component';

@NgModule({
  declarations: [Page0256Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0256Component }])],
  exports: [Page0256Component]
})
export class Page0256Module {}
