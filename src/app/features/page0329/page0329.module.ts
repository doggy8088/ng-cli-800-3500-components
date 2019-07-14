import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0329Component } from './page0329.component';

@NgModule({
  declarations: [Page0329Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0329Component }])],
  exports: [Page0329Component]
})
export class Page0329Module {}
