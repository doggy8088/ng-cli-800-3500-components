import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0645Component } from './page0645.component';

@NgModule({
  declarations: [Page0645Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0645Component }])],
  exports: [Page0645Component]
})
export class Page0645Module {}
