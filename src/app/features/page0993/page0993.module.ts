import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0993Component } from './page0993.component';

@NgModule({
  declarations: [Page0993Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0993Component }])],
  exports: [Page0993Component]
})
export class Page0993Module {}
