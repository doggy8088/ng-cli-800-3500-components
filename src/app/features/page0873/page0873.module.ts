import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0873Component } from './page0873.component';

@NgModule({
  declarations: [Page0873Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0873Component }])],
  exports: [Page0873Component]
})
export class Page0873Module {}
