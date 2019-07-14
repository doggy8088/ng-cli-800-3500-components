import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0606Component } from './page0606.component';

@NgModule({
  declarations: [Page0606Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0606Component }])],
  exports: [Page0606Component]
})
export class Page0606Module {}
