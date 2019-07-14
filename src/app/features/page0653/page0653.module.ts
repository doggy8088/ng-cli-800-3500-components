import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0653Component } from './page0653.component';

@NgModule({
  declarations: [Page0653Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0653Component }])],
  exports: [Page0653Component]
})
export class Page0653Module {}
