import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0187Component } from './page0187.component';

@NgModule({
  declarations: [Page0187Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0187Component }])],
  exports: [Page0187Component]
})
export class Page0187Module {}
