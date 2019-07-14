import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0162Component } from './page0162.component';

@NgModule({
  declarations: [Page0162Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0162Component }])],
  exports: [Page0162Component]
})
export class Page0162Module {}
