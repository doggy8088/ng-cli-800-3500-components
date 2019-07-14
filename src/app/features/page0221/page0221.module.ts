import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0221Component } from './page0221.component';

@NgModule({
  declarations: [Page0221Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0221Component }])],
  exports: [Page0221Component]
})
export class Page0221Module {}
