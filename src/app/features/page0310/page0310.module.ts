import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0310Component } from './page0310.component';

@NgModule({
  declarations: [Page0310Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0310Component }])],
  exports: [Page0310Component]
})
export class Page0310Module {}
