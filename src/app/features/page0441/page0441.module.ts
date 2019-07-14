import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0441Component } from './page0441.component';

@NgModule({
  declarations: [Page0441Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0441Component }])],
  exports: [Page0441Component]
})
export class Page0441Module {}
