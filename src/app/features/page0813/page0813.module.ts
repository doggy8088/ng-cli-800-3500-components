import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0813Component } from './page0813.component';

@NgModule({
  declarations: [Page0813Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0813Component }])],
  exports: [Page0813Component]
})
export class Page0813Module {}
