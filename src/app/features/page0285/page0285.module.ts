import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0285Component } from './page0285.component';

@NgModule({
  declarations: [Page0285Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0285Component }])],
  exports: [Page0285Component]
})
export class Page0285Module {}
