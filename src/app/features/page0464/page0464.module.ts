import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0464Component } from './page0464.component';

@NgModule({
  declarations: [Page0464Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0464Component }])],
  exports: [Page0464Component]
})
export class Page0464Module {}
