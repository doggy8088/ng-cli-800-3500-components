import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0488Component } from './page0488.component';

@NgModule({
  declarations: [Page0488Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0488Component }])],
  exports: [Page0488Component]
})
export class Page0488Module {}
