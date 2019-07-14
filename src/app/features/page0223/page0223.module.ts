import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0223Component } from './page0223.component';

@NgModule({
  declarations: [Page0223Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0223Component }])],
  exports: [Page0223Component]
})
export class Page0223Module {}
