import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0125Component } from './page0125.component';

@NgModule({
  declarations: [Page0125Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0125Component }])],
  exports: [Page0125Component]
})
export class Page0125Module {}
