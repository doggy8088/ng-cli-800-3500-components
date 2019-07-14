import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0257Component } from './page0257.component';

@NgModule({
  declarations: [Page0257Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0257Component }])],
  exports: [Page0257Component]
})
export class Page0257Module {}
