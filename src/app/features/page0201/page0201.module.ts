import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0201Component } from './page0201.component';

@NgModule({
  declarations: [Page0201Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0201Component }])],
  exports: [Page0201Component]
})
export class Page0201Module {}
