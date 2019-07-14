import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0812Component } from './page0812.component';

@NgModule({
  declarations: [Page0812Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0812Component }])],
  exports: [Page0812Component]
})
export class Page0812Module {}
