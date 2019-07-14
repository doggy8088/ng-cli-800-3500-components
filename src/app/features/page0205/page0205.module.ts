import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0205Component } from './page0205.component';

@NgModule({
  declarations: [Page0205Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0205Component }])],
  exports: [Page0205Component]
})
export class Page0205Module {}
