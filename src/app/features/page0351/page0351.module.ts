import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0351Component } from './page0351.component';

@NgModule({
  declarations: [Page0351Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0351Component }])],
  exports: [Page0351Component]
})
export class Page0351Module {}
