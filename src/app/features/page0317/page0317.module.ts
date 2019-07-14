import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0317Component } from './page0317.component';

@NgModule({
  declarations: [Page0317Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0317Component }])],
  exports: [Page0317Component]
})
export class Page0317Module {}
