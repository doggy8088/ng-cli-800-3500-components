import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0593Component } from './page0593.component';

@NgModule({
  declarations: [Page0593Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0593Component }])],
  exports: [Page0593Component]
})
export class Page0593Module {}
