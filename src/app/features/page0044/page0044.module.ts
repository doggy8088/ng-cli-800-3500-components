import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0044Component } from './page0044.component';

@NgModule({
  declarations: [Page0044Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0044Component }])],
  exports: [Page0044Component]
})
export class Page0044Module {}
