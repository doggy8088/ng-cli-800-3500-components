import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0574Component } from './page0574.component';

@NgModule({
  declarations: [Page0574Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0574Component }])],
  exports: [Page0574Component]
})
export class Page0574Module {}
