import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0432Component } from './page0432.component';

@NgModule({
  declarations: [Page0432Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0432Component }])],
  exports: [Page0432Component]
})
export class Page0432Module {}
