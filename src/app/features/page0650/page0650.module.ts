import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0650Component } from './page0650.component';

@NgModule({
  declarations: [Page0650Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0650Component }])],
  exports: [Page0650Component]
})
export class Page0650Module {}
