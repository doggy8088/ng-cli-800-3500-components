import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0713Component } from './page0713.component';

@NgModule({
  declarations: [Page0713Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0713Component }])],
  exports: [Page0713Component]
})
export class Page0713Module {}
