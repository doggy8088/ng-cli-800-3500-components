import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0620Component } from './page0620.component';

@NgModule({
  declarations: [Page0620Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0620Component }])],
  exports: [Page0620Component]
})
export class Page0620Module {}
