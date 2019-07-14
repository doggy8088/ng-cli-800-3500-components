import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0710Component } from './page0710.component';

@NgModule({
  declarations: [Page0710Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0710Component }])],
  exports: [Page0710Component]
})
export class Page0710Module {}
