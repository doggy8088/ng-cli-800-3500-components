import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0196Component } from './page0196.component';

@NgModule({
  declarations: [Page0196Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0196Component }])],
  exports: [Page0196Component]
})
export class Page0196Module {}
