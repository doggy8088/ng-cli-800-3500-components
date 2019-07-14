import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0427Component } from './page0427.component';

@NgModule({
  declarations: [Page0427Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0427Component }])],
  exports: [Page0427Component]
})
export class Page0427Module {}
