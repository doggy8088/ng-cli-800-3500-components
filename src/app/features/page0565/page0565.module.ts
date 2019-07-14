import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0565Component } from './page0565.component';

@NgModule({
  declarations: [Page0565Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0565Component }])],
  exports: [Page0565Component]
})
export class Page0565Module {}
