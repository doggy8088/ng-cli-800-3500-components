import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0534Component } from './page0534.component';

@NgModule({
  declarations: [Page0534Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0534Component }])],
  exports: [Page0534Component]
})
export class Page0534Module {}
