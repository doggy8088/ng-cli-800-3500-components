import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0935Component } from './page0935.component';

@NgModule({
  declarations: [Page0935Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0935Component }])],
  exports: [Page0935Component]
})
export class Page0935Module {}
