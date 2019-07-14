import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0628Component } from './page0628.component';

@NgModule({
  declarations: [Page0628Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0628Component }])],
  exports: [Page0628Component]
})
export class Page0628Module {}
