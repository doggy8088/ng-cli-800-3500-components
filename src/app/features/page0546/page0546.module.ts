import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0546Component } from './page0546.component';

@NgModule({
  declarations: [Page0546Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0546Component }])],
  exports: [Page0546Component]
})
export class Page0546Module {}
