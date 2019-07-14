import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0332Component } from './page0332.component';

@NgModule({
  declarations: [Page0332Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0332Component }])],
  exports: [Page0332Component]
})
export class Page0332Module {}
