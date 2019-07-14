import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0093Component } from './page0093.component';

@NgModule({
  declarations: [Page0093Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0093Component }])],
  exports: [Page0093Component]
})
export class Page0093Module {}
