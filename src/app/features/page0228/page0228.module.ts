import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0228Component } from './page0228.component';

@NgModule({
  declarations: [Page0228Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0228Component }])],
  exports: [Page0228Component]
})
export class Page0228Module {}
