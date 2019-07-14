import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0026Component } from './page0026.component';

@NgModule({
  declarations: [Page0026Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0026Component }])],
  exports: [Page0026Component]
})
export class Page0026Module {}
