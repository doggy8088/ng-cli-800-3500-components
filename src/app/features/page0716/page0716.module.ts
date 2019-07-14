import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0716Component } from './page0716.component';

@NgModule({
  declarations: [Page0716Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0716Component }])],
  exports: [Page0716Component]
})
export class Page0716Module {}
