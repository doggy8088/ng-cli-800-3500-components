import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0241Component } from './page0241.component';

@NgModule({
  declarations: [Page0241Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0241Component }])],
  exports: [Page0241Component]
})
export class Page0241Module {}
