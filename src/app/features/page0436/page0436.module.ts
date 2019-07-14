import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0436Component } from './page0436.component';

@NgModule({
  declarations: [Page0436Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0436Component }])],
  exports: [Page0436Component]
})
export class Page0436Module {}
