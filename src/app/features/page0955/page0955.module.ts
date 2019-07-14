import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0955Component } from './page0955.component';

@NgModule({
  declarations: [Page0955Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0955Component }])],
  exports: [Page0955Component]
})
export class Page0955Module {}
