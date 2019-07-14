import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0793Component } from './page0793.component';

@NgModule({
  declarations: [Page0793Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0793Component }])],
  exports: [Page0793Component]
})
export class Page0793Module {}
