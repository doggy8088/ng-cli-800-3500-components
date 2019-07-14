import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0163Component } from './page0163.component';

@NgModule({
  declarations: [Page0163Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0163Component }])],
  exports: [Page0163Component]
})
export class Page0163Module {}
