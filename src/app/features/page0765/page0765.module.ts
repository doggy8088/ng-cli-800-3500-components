import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0765Component } from './page0765.component';

@NgModule({
  declarations: [Page0765Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0765Component }])],
  exports: [Page0765Component]
})
export class Page0765Module {}
