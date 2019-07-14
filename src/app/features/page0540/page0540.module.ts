import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0540Component } from './page0540.component';

@NgModule({
  declarations: [Page0540Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0540Component }])],
  exports: [Page0540Component]
})
export class Page0540Module {}
