import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0028Component } from './page0028.component';

@NgModule({
  declarations: [Page0028Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0028Component }])],
  exports: [Page0028Component]
})
export class Page0028Module {}
