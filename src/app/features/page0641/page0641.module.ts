import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0641Component } from './page0641.component';

@NgModule({
  declarations: [Page0641Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0641Component }])],
  exports: [Page0641Component]
})
export class Page0641Module {}
