import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0074Component } from './page0074.component';

@NgModule({
  declarations: [Page0074Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0074Component }])],
  exports: [Page0074Component]
})
export class Page0074Module {}
