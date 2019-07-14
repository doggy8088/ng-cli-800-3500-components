import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0144Component } from './page0144.component';

@NgModule({
  declarations: [Page0144Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0144Component }])],
  exports: [Page0144Component]
})
export class Page0144Module {}
